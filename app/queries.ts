export const infoQuery = `*[_type == "about" && fullName == "Kyle Bolo"][0] {
    _id,  
    fullName,
    jobTitle,
    tagLine,
    profileImage,
    summary,
    aboutMe,
    resume,

}`;