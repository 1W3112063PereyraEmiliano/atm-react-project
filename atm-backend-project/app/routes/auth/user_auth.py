from flask import Blueprint, jsonify, request
from app.models import User
from flask_bcrypt import Bcrypt
import app.services.auth.token_auth as token_auth

auth_bp = Blueprint("routes_auth", __name__)
bcrypt = Bcrypt()


@auth_bp.route("/login", methods=["POST"])
def login():
    
    data = request.get_json()
    
    user = User.query.filter_by(username=data['username']).first()
    
    if user and bcrypt.check_password_hash(user.password, data['password']):
        
        return token_auth.write_token(data = request.get_json())
        
    else:
        
        response = jsonify({"message": "Usuario o contraseña incorrecta"})
        response.status_code = 404
        return response
    

@auth_bp.route('/signup', methods=['POST'])
def signup():
    
    data = request.get_json()
    
    hashed_password = bcrypt.generate_password_hash(data['password']).decode('utf-8')
    
    if User.query.filter_by(username=data['username']).first():
        
        response = jsonify({"message": "Usuario existente"})
        response.status_code = 400
        return response
    
    new_user = User(username=data['username'], name=data['name'], last_name=data['lastname'], password=hashed_password)

    new_user.save()

    response = jsonify({"message": "Usuario creado con éxito"})
    response.status_code = 200
    return response
    

@auth_bp.route("/verify/token")
def verify_token():
    
    token = request.headers['Authorization'].split(" ")[1]
    
    return token_auth.validate_token(token, output=True)
