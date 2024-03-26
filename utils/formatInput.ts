export const formatNumber = (num:number) => {
    return num.toLocaleString('id-ID').replace(/,/g, '.')
}

export const formatDate = (date:string) => {
    const dataDate = new Date(date);

    // Get the day, month, and year components from the date
    const day = dataDate.getDate().toString().padStart(2, '0');
    const month = (dataDate.getMonth() + 1).toString().padStart(2, '0');
    const year = dataDate.getFullYear();
    
    // Concatenate the components in the desired format
    const formattedDate = `${day}/${month}/${year}`;

    return formattedDate;
}