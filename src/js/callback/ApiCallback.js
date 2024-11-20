export default class ApiCallback {
    async create(data) {
        try {
            const response = await fetch('./sendmail.php', { //  https://alef-kazah/sendmail.php
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