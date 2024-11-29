import HeadBanner from '../components/headBanner.jsx'
import SearchBar from '../components/searchBar.jsx'
import ShopPage from '../pages/shop_page/content.jsx'

function ShopPageLayout() {
    return ( <div>
        <SearchBar></SearchBar>
        <HeadBanner></HeadBanner>
        <ShopPage></ShopPage>
    </div> );
}

export default ShopPageLayout;