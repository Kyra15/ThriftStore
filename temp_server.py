import json
from flask import Flask, jsonify, render_template, redirect
import sqlite3

app = Flask(__name__)


def get_db_connection():
    conn = sqlite3.connect('database.db')
    conn.row_factory = sqlite3.Row
    print(conn)
    return conn


def init_db():
    conn = get_db_connection()
    conn.execute('''CREATE TABLE IF NOT EXISTS products (
                        id INTEGER PRIMARY KEY AUTOINCREMENT,
                        name TEXT NOT NULL,
                        price REAL NOT NULL,
                        type TEXT NOT NULL,
                        description TEXT,
                        tags TEXT,
                        size TEXT,
                        stock REAL NOT NULL,
                        images TEXT)''')
    conn.commit()
    conn.close()


def add_test():
    conn = get_db_connection()
    tags_json = json.dumps(["small", "shirt", "monkey", "clothes"])
    images_json = json.dumps(["blueThumbsUp.png", "blueWow.png"])
    conn.execute('''INSERT INTO products(name, price, type, description, tags, size, stock, images)
                        VALUES(?, ?, ?, ?, ?, ?, ?, ?)''',
                 ("Monkey Shirt", 14.99, "clothes",
                  "Monkeys are intelligent animals that are good at solving problems.",
                  tags_json, "sz-s", 50, images_json))
    conn.commit()
    conn.close()


def drop_table():
    conn = get_db_connection()
    conn.execute('''DROP TABLE IF EXISTS products;''')
    conn.commit()
    conn.close()



@app.route('/')
def default():
    return redirect('/login')

@app.route('/inventory')
def inventory():
    return render_template('inventory.html')

@app.route('/login')
def login():
    return render_template('login.html')

@app.route('/item')
def item():
    return render_template('item.html')


@app.route('/edit')
def edit():
    return render_template('edit.html')


@app.route('/productsdb', methods=['GET'])
def get_products():
    conn = get_db_connection()
    products = conn.execute('SELECT * FROM products').fetchall()
    conn.close()

    product_list = [dict(product) for product in products]

    return jsonify(product_list)


# drop_table()
# init_db()
# add_test()

if __name__ == '__main__':
    print("ugh")
    app.run(debug=True, port=4200)
