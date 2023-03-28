import "../styles/HeaderStyled.css"

export default function Header() {
    return (
        <div className = "Header">
            <div className="header-left">
                <div className = "header-logo">

                </div>
                <div className = "header-search">
                    <input type="text"/>
                </div>
            </div>

            <img src = "images/profile-user.png" alt = "id" className = "header-right" />
        </div>
    )
}