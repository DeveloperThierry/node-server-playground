export const getDataByQueryParams = (data, queryParams) => {
    const { name, country, is_open_to_public } = queryParams
    if (country){
        data = data.filter((destination => destination.country.toLowerCase() === country.toLowerCase()))
    }

    if (name){
        data = data.filter((destination => destination.name.toLowerCase() === name.toLowerCase()))
    }

    if (is_open_to_public){
        data = data.filter((destination => destination.is_open_to_public === JSON.parse(is_open_to_public.toLowerCase())))
    }

    return data
}