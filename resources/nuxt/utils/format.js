const formatServices = services => {
    return services.split(',').map(el => el.trim())
}

export default formatServices
