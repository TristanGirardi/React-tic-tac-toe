const Header = () => {
    return(
        <div class="sidebar">
        <label for="click">
            <div class="menu-icon">
                <div class="line line-1"></div>
                <div class="line line-2"></div>
                <div class="line line-3"></div>
            </div>
        </label>
        <ul class="social-icons-list">
            <li>
                <a href="#" class="social-link"><i class="fab fa-facebook-f"></i></a>
            </li>
            <li>
                <a href="#" class="social-link"><i class="fab fa-twitter"></i></a>
            </li>
            <li>
                <a href="#" class="social-link"><i class="fab fa-google-plus"></i></a>
            </li>
            <li>
                <a href="#" class="social-link"><i class="fab fa-instagram"></i></a>
            </li>
        </ul>

        <div class="year">
            <p>
                2024
            </p>
        </div>
    </div>
    )
}
export default Header