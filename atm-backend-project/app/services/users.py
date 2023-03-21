from app.models import User


class UserService():

    def get_all_users():
        
        return [ user.serialize() for user in User.query.all()]
        
        #user = User.query.filter(User.name == 'admin').first()