export const getCoordinatesAPI = async (city, country = '') => {

    const callUrl = `http://api.geonames.org/searchJSON?q=${city}&country=${country}&maxRows=3&username=akiakiaki`;
    const res = await fetch('https://cors-anywhere.herokuapp.com/'+ callUrl);
    //const res = await fetch(callUrl);
    try {
        const data = await res.json();
        
        if(data.totalResultsCount == 0) {
            return { error: "The "+ city +" can't be found" };
        }
        return data;

    } catch(err){
        console.log(err);
    }
    
}

export const getWeatherAPI = async (lat, lng, date = '') => {

    const DARK_SKY_SECRET_KEY = 'ba06017d98a8d12235949b5035744570';
    const dateInSeconds = new Date(date) / 1000;
    const callUrl = `https://api.darksky.net/forecast/${DARK_SKY_SECRET_KEY}/${lat},${lng},${dateInSeconds}`;
    const res = await fetch('https://cors-anywhere.herokuapp.com/'+ callUrl);
    
    try {
        const data = await res.json();
        return data;

    } catch(err){
        console.log(err);
    }
    
}

export const getImageAPI = async (keyword) => {

    //replace the spaces with + sign;
    keyword = keyword.replace(/\s/g, '+');

    const PIXABAY_API_KEY='15817374-015ecdcbd68299917ebff2ba6';
    const callUrl = `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=${keyword}&image_type=photo&pretty=true`;
    const res = await fetch(callUrl);

    try {

        const data = await res.json();
        return data;

    } catch(err){
        console.log(err);
    }
    
}