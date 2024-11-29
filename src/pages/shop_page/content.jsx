function ShopPage() {
  return (
    <div>
      <div className="container mx-auto my-6">
        <div className="grid grid-cols-4">
          <div className="flex flex-col">
            <div className="flex flex-row justify-start">
              <div className="text-black me-4"><h4>Filters</h4></div>
              <div className="text-[#C4C4C4] border-b me-4 font-normal">Clear filters</div>
            </div>
            <div>Categories</div>
            <div>
              <ul></ul>
            </div>
            <div>Color</div>
            <div>
              <ul></ul>
            </div>
          </div>
          <div className="col-span-3 flex flex-col">
            <div className="text-right">sort</div>
            <div className="text-right">total</div>
            <div className="grid grid-row align-middle items-center justify-center">pagi</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopPage;
