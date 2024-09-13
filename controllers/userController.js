const prisma = new (require('@prisma/client')).PrismaClient();


exports.getAllUsers = async (req,res) =>{
    const users = await prisma.user.findMany({include: {company:true} });
    res.render('user/list', {users});
}

exports.createUserForm = (req,res) => {
    res.render('user/create');
}

exports.createUser = async (req,res) => {
    const {name, email, companyId} = req.body;
    await prisma.user.create({
        data: {name,email,companyId: parseInt(companyId)}
    });
    res.render('user/')
}

exports.editUserForm = async (req, res) => {
    const user = await prisma.user.findUnique({ where: { id: parseInt(req.params.id) } });
    res.render('user/edit', { user });
  };
  
exports.updateUser = async (req, res) => {
const { name, email, companyId } = req.body;
await prisma.user.update({
    where: { id: parseInt(req.params.id) },
    data: { name, email, companyId: parseInt(companyId) }
});
res.redirect('/users');
};

exports.deleteUser = async (req, res) => {
await prisma.user.delete({ where: { id: parseInt(req.params.id) } });
res.redirect('/users');
};