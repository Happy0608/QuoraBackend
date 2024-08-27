

class UserService{
    constructor(UserRepostiroy){
        this.UserRepostiroy=UserRepostiroy;
    }

    async createUser(databody){
        try {
            if(!databody){
                throw new error;
            }
            const user=await this.UserRepostiroy.createUser(databody);
            return user;
        } catch (error) {
            
        }
    }

    async getuserinfo(user_id){
        try {
            const userinfo=this.UserRepostiroy.getuserinfo(user_id);
            return userinfo;
        } catch (error) {
            
        }
    }

    async UpdateUserInfo(user_id,userdata){
        try {
            const Updatedinfo=await this.UserRepostiroy.UpdateUserInfo(user_id,databody);
            return Updatedinfo;

        } catch (error) {
            
        }
    }
}

module.exports=UserService;