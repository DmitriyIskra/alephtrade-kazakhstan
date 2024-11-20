export default class ApiCallback {
    async create(data) {
        try {
            const response = await fetch('https://alef-kazah/sendmail.php', { // ./sendmail.php
                method: 'POST',
                headers: {
                    // 'Content-Type' : 'application/json',
                },
                body: data,
            })

            const result = await response.json();
            return result.message;
        } catch (error) {
            console.error('Ошибка отправки email');
            return false;
        }
    }
}