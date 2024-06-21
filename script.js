document.addEventListener('DOMContentLoaded', () => {
    const messageElement = document.getElementById('message');
    const startDate = new Date('2002-03-21');
    const currentDate = new Date();
    
    const monthsDifference = (currentDate.getFullYear() - startDate.getFullYear()) * 12 
                             + currentDate.getMonth() - startDate.getMonth();

    if (monthsDifference === 27) {
        messageElement.textContent = '¡Feliz 27º mes de noviazgo!';
    } else {
        messageElement.textContent = `Han pasado ${monthsDifference} meses desde el 21 de marzo del 2002.`;
    }
});
