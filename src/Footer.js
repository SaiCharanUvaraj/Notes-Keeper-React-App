const date=new Date();
let year=date.getFullYear();
let months={
    0:"January", 1:"February", 2:"March", 3:"April", 4:"May", 5:"June", 6:"July", 7:"August", 8:"September", 9:"October", 10:"November", 11:"December"
}
let month=months[date.getMonth()];
let days={
    0:"Sunday", 1:"Monday", 2:"Tuesday", 3:"Wednesday", 4:"Thursday", 5:"Friday", 6:"Saturday"
}
let day=days[date.getDay()];
let dn=date.getDate();
function Footer()
{
    return(
        <footer className="fixed bottom-0 left-0 right-0 text-white bg-[#31363F] text-sm shadow-2xl shadow-black">
            <div className="grid place-items-center p-1">
                <p>Keep Your Notes using Keeper</p>
                <p>{day+", "+month+" "+dn+", "+year}</p>
            </div>
        </footer>
    )
}
export default Footer;
