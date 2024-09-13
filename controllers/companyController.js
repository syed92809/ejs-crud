const prisma = new (require('@prisma/client')).PrismaClient();

exports.getAllCompanies = async (req, res) => {
  const companies = await prisma.company.findMany();
  res.render('company/list', { companies });
};

exports.createCompanyForm = (req, res) => {
  res.render('company/create');
};

exports.createCompany = async (req, res) => {
  const { name } = req.body;
  await prisma.company.create({ data: { name } });
  res.redirect('/companies');
};

exports.editCompanyForm = async (req, res) => {
  const company = await prisma.company.findUnique({ where: { id: parseInt(req.params.id) } });
  res.render('company/edit', { company });
};

exports.updateCompany = async (req, res) => {
  const { name } = req.body;
  await prisma.company.update({
    where: { id: parseInt(req.params.id) },
    data: { name }
  });
  res.redirect('/companies');
};

exports.deleteCompany = async (req, res) => {
  await prisma.company.delete({ where: { id: parseInt(req.params.id) } });
  res.redirect('/companies');
};
