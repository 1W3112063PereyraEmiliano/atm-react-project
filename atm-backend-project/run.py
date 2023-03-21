from app import app
from dotenv import load_dotenv

if __name__ == '__main__':
    load_dotenv()
    app.run(debug=False,load_dotenv=False,port=8000)