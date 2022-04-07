import ApiService from "./api.service";

const TemplateService = {
    getAllAdminTemplates: async () => await ApiService.get('/admin/get_template'),
    getAllUserTemplates: async () => await ApiService.get('/user/get_template')
    // test: async () =>  await ApiService.get('https://api64.ipify.org?format=json'),
};

export default TemplateService;