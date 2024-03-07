const userInitials = (first, last) =>{
    const firstLetter = first.slice(0,1)
    const secondLetter = last.slice(0,1)
    return firstLetter.toUpperCase() + secondLetter.toUpperCase()
}

export default userInitials;