import bcrypt from 'bcrypt'

export const hashPass = async (password)=>{
    try{
      const saltRound = 10
      const hashPassword = await bcrypt.hash(password, saltRound) 
      return hashPassword
    }
    catch(err){
        console.log(err)
    }
};

export const comparePass = async (password, hashPassword)=>{
  return bcrypt.compare(password, hashPassword)
}