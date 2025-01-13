import json
from flask import Flask, jsonify, render_template, redirect, request
import sqlite3

app = Flask(__name__)


def get_db_connection():
    conn = sqlite3.connect('database.db')
    conn.row_factory = sqlite3.Row
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

    conn.execute('''CREATE TABLE IF NOT EXISTS users (
                        id INTEGER PRIMARY KEY AUTOINCREMENT,
                        name TEXT,
                        email TEXT,
                        username TEXT NOT NULL,
                        password TEXT NOT NULL)''')
    # hash password
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

    tags_json2 = json.dumps(["large", "couch", "furniture", "home decor"])
    images_json2 = json.dumps(["blueWow.png"])
    conn.execute('''INSERT INTO products(name, price, type, description, tags, size, stock, images)
                        VALUES(?, ?, ?, ?, ?, ?, ?, ?)''',
                 ("Couch", 4.99, "furniture",
                  "Almost all types of monkeys live together in groups.",
                  tags_json2, "sz-l", 10, images_json2))

    conn.execute('''INSERT INTO users(name, email, username, password)
                    VALUES(?, ?, ?, ?)''',
                 ("Christine Yu", "christine@gmail.com", "cyu", "1234"))

    conn.commit()
    conn.close()


def drop_table():
    conn = get_db_connection()
    conn.execute('''DROP TABLE IF EXISTS products;''')
    conn.execute('''DROP TABLE IF EXISTS users;''')
    conn.commit()
    conn.close()


def update_product(id, name, price, typeof, desc, tags, size, stock, imgs):
    conn = get_db_connection()
    conn.execute('''UPDATE products
                    SET name = ?, price = ?, type = ?, description = ?, tags = ?, size = ?, stock = ?, images = ?
                    WHERE id = ?;''', (name, price, typeof, desc, tags, size, stock, imgs, id))
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


@app.route('/users_testbank', methods=['GET'])
def get_users():
    conn = get_db_connection()
    users = conn.execute('SELECT * FROM users').fetchall()
    conn.close()

    user_list = [dict(user) for user in users]

    return jsonify(user_list)


drop_table()
init_db()
add_test()

# NEED TO FIX FETCH FUNCS THERES TOO MANY

if __name__ == '__main__':
    print("ugh")
    app.run(debug=True, port=4200)
