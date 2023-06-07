
from flask import Flask, render_template, request, escape, session
from vsearch import search4letters
from DBcm import UseDatabase, ConnectionError, CredentialsError, SQLError
from time import sleep
from threading import Thread
from flask import copy_current_request_context
from checker import check_logged_in
app = Flask(__name__)
app.config['dbconfig'] = {'host': '127.0.0.1',
                          'user': 'root',
                          'password': '12345',
                          'database': 'vsearchlogDB', }


@app.route('/login')
def do_login() -> str:
    session['logged_in'] = True
    return "You are now logged in!"


@app.route('/logout')
def logout() -> str:
    session.pop('logged_in')
    return "You are now logged out!"


@app.route('/search4', methods=['POST'])
def do_search() -> 'html':
    @copy_current_request_context
    def log_request(req: 'flask_request', res: str) -> None:

        sleep(5)
        with UseDatabase(app.config['dbconfig']) as cursor:
            _SQL = """insert into log
                    (phrase, letters, ip, browser_string, results)
                    values
                    (%s, %s, %s, %s, %s)"""

            cursor.execute(_SQL, (req.form['phrase'],
                                  req.form['letters'],
                                  req.remote_addr,
                                  str(req.user_agent),
                                  res, ))

    phrase = request.form['phrase']
    letters = request.form['letters']
    title = 'Here are your results:'
    results = str(search4letters(phrase, letters))
    try:
        t = Thread(target=log_request, args=(request, results))
        t.start()
    except Exception as err:
        print("***** Logging failed with this error:", err)

    return render_template('results.html',
                           the_title=title,
                           the_phrase=phrase,
                           the_letters=letters,
                           the_results=results,)


@app.route('/')
@app.route('/entry')
def entry_page() -> 'html':
    return render_template('entry.html',
                           the_title='Welcome to search4letters on the web!')


@app.route('/viewlog')
@check_logged_in
def view_the_log() -> 'html':
    try:

        with UseDatabase(app.config['dbconfig']) as cursor:
            _SQL = """select ip, browser_string, phrase, letters, results from log;"""
            cursor.execute(_SQL)
            contents = cursor.fetchall()
        titles = ("IP", "User_agent", "Remote_addr", "Letters", "Results")

        return render_template('viewlog.html',
                               the_title='View Log',
                               the_row_titles=titles,
                               the_data=contents,)
    except ConnectionError as err:
        print("Ошибка 1")
    except CredentialsError as err:
        print("Ошибка 2")
    except SQLError as err:
        print("Ошибка 3")
    except Exception as err:
        print("Неизвестная ошибка")
    return "Error"


app.secret_key = "test"
if __name__ == '__main__':
    app.run(debug=True)
