module.exports = {
    afterCreate(event) {
        const { result } = event;

        try {
             strapi.plugins['email'].services.email.send({
                to: 'vipul.malakiya@teamcomputers.com',
                from: 'vipul.malakiya@teamcomputers.com',
                subject: 'You have a new todo',
                text: `Your todo is : ${result.name}`
            })
        } catch (err) {
            console.log(err);
        }
    }
}