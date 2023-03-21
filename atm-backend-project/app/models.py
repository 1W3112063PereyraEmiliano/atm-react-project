from app import db, login_manager
from flask_login import UserMixin


class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key = True)
    username = db.Column(db.String(100), unique = True, nullable=False)
    name = db.Column(db.String(100), nullable=False)
    last_name = db.Column(db.String(100), nullable=False)
    password = db.Column(db.String(400), nullable=False)
    role = db.Column(db.Integer)
    
    def __init__(self, username, name, last_name, password):
        self.username = username
        self.name = name
        self.last_name = last_name,
        self.password = password
        
    def save(self):
        db.session.add(self)
        db.session.commit()
    
    def serialize(self):
        return{
            'id': self.id,
            'username': self.username,
            'name': self.name
        }


@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))
        