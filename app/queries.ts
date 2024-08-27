export const infoQuery = `*[_type == "about" && fullName == "Kyle Bolo"][0] {
    _id,  
    fullName,
    tagLine,
    summary,
    aboutMe,
}`;