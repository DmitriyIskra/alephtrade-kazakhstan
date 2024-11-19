export default class ApiCallback {
    async create(data) {
        try {
            const response = await fetch('https://sendmail/sendmail.php', {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: data
            })

            const result = await response.json();
        } catch (error) {
            console.error('Ошибка отправки email');
        }
    }
}