import ApiService from "./api.service";

const TemplateService = {
    getAllAdminTemplates: async () => await ApiService.get('/admin/get_template'),
    getAllUserTemplates: async () => await ApiService.get('/user/get_template'),
    uploadWordDoc: async (form) => await ApiService.post('/user/uploadImage', form),
    saveTemplate: async (data) => await ApiService.post('/user/add_template', data),
    updateTemplate: async (data) => await ApiService.post('/user/update_template', data),
    getQuestionnaireCategories: async () => await ApiService.get('/admin/get_categories')
    // test: async () =>  await ApiService.get('https://api64.ipify.org?format=json'),
};

export default TemplateService;