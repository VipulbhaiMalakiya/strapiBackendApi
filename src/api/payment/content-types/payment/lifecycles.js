module.exports = {

    async afterCreate(event) {
        const { result } = event;
        try {
            await strapi.plugins['email'].services.email.send({
                to: `${result.email}`,
                from: 'vipul.malakiya@teamcomputers.com',
                subject: 'Your request send successful ',
                text: `Dear  ${result.userName} Your request send successful. Your request will be approved  5 working days`
            })
        } catch (err) {
            console.log(err);
        }
    },

    async afterUpdate(event) {
        const { result } = event;
        console.log(event)
        try {
            await strapi.plugins['email'].services.email.send({
                to: `${result.email}`,
                from: 'vipul.malakiya@teamcomputers.com',
                subject: 'Your request has been approved',
                text: `${result.updatedBy.username} has Approved your request.`
            })
        } catch (err) {
            console.log("--->", err);
            console.log("email problem")
        }
    }
}



