import logo from './logo.svg';
import './App.css';
import './main.css';

function Progress({dataPhase, dataOrder, progressLabel}){
  return (
    <>
      <span className="progress-group" data-phase={dataPhase}>
        <span className="progress-icon">
          <span className="text">{dataOrder}</span>
        </span>
        <span className="progress-label">{progressLabel}</span>
      </span>
  </>
  );
}

function InputGroup({inputLabel, width, children}) {
  return (
    <div className={`input-group ${width}`}>
        <div className="input-label">{inputLabel}</div>
      
      {children}
    </div>

  );
}

function FormContainer({dataPhase, title, children}) {
  return (
    <form className="col col-12" data-phase={dataPhase}>
      <h3 className="form-title">{title}</h3>
      <section className="form-body col col-12">
        {children}
      </section>
    </form>
  );
}

function Shipping(props){
  return(
    <label className="radio-group col col-12" data-price={props.shippingPrice}>
    <input id={props.shippingId} type="radio" name="shipping"  />
    <div className="radio-info">
      <div className="col col-12">
        <div className="text">{props.shippingText}</div>
        <div className="price"></div>
      </div>
      <div className="period col col-12">{props.shippingPeriod}</div>
    </div>
    <div className="radio-box-border"></div>
  </label>
  );
}

function CartItem(props) {
  return (
    <div className="product-container col col-12" data-count="0" data-price={props.dataPrice}>
      <img className="img-container"src={`/images/${props.imgFile}`} />
      <div className="product-info">
        <div className="product-name">{props.productName}</div>
        <div className="product-control-container">
          <div className="product-control">
            <object className="product-action minus" data="/icons/minus.svg"></object>
            <span className="product-count">0</span>
            <object className="product-action minus" data="/icons/plus.svg"></object>
          </div>
        </div>
        <div className="price">$0</div>
      </div>
    </div>
  );
}

export default function Main(){
  return(
    <main className="site-main">
      <div className="main-container">
        <section className="register-container col col-lg-6 col-sm-12" data-phase="1" data-total-price="0">
          <h2 className="register-title col col-12">結帳</h2>
        
        <section className="progress-container col col-12">
          <Progress
            dataPhase="address"
            progressLabel="寄送地址"
            dataOrder={1}
          />
          <span className="progress-bar" data-order="1"></span>
          <Progress
            dataPhase="shipping"
            progressLabel="運送方式"
            dataOrder={2}
          />
          <span className="progress-bar" data-order="2"></span>
          <Progress
            dataPhase="credit-card"
            progressLabel="付款資訊"
            dataOrder={3}
          />
        </section>
        
        <section className="form-container col col-12">
          <FormContainer dataPhase="address" title="寄送地址" >
          <div className="col col-12">
            <InputGroup inputLabel="稱謂" width="input-w-lg-2 input-w-sm-s1">
              <div className="select-container">
                <select defaultValue="mr" id="chengwei">
                  <option value="mr">先生</option>
                  <option value="ms">女士</option>
                  <option value="mx">不明</option>
                </select>
              </div>
            </InputGroup>
            <InputGroup inputLabel="姓名" width="input-w-lg-4 input-w-sm-s2">
              <input type="text" id="input-name" placeholder="請輸入姓名" />
            </InputGroup>
          </div>
          <div className="col col-12">
            <InputGroup inputLabel="電話" width="input-w-lg-3 input-w-sm-full">
              <input type="text" id="input-phoneno" placeholder="請輸入行動電話" />
            </InputGroup>
            <InputGroup inputLabel="Email" width="input-w-lg-3 input-w-sm-full">
              <input type="email" id="input-email" placeholder="請輸入電子郵件" />
            </InputGroup>
          </div>
          <div className="col col-12">
            <InputGroup inputLabel="縣市" width="input-w-lg-2 input-w-sm-full">
              <div class="select-container">
                <select required>
                  <option value="">請選擇縣市</option>
                  <option value="KLU">基隆市</option>
                  <option value="TPH">新北市</option>
                  <option value="TPE">臺北市</option>
                  <option value="TYC">桃園市</option>
                  <option value="HSH">新竹縣</option>
                  <option value="HSC">新竹市</option>
                  <option value="MAC">苗栗市</option>
                  <option value="MAL">苗栗縣</option>
                  <option value="TXG">臺中市</option>
                  <option value="CWH">彰化縣</option>
                  <option value="CWS">彰化市</option>
                  <option value="NTC">南投市</option>
                  <option value="NTO">南投縣</option>
                  <option value="YLH">雲林縣</option>
                  <option value="CHY">嘉義縣</option>
                  <option value="CYI">嘉義市</option>
                  <option value="TNN">臺南市</option>
                  <option value="KHH">高雄市</option>
                  <option value="IUH">屏東縣</option>
                  <option value="PTS">屏東市</option>
                  <option value="ILN">宜蘭縣</option>
                  <option value="ILC">宜蘭市</option>
                  <option value="HWA">花蓮縣</option>
                  <option value="HWC">花蓮市</option>
                  <option value="TTC">臺東市</option>
                  <option value="TTT">臺東縣</option>
                  <option value="PEH">澎湖縣</option>
                  <option value="KMN">金門縣</option>
                  <option value="LNN">連江縣</option>
                </select>
              </div>
            </InputGroup>
            <InputGroup inputLabel="縣市" width="input-w-lg-4 input-w-sm-full">
             <input type="text" placeholder="請輸入地址" />
            </InputGroup>
          </div>
          </FormContainer>
          {/**
          <FormContainer dataPhase="shipping" title="運送方式" >
            <Shipping
              shippingPrice="0"
              shippingId="shipping-standard"
              shippingText="標準運送"
              shippingPeriod="約 3~7 個工作天"
            />
            <Shipping
              shippingPrice="500"
              shippingId="shipping-dhl"
              shippingText="DHL 貨運"
              shippingPeriod="48 小時內送達"
            />
          </FormContainer>
          <FormContainer dataPhase="address" title="付款資訊" >
            <InputGroup inputLabel="持卡人姓名" width="input-w-sm-full">
              <input type="text" placeholder="John Doe" />
            </InputGroup>
            <InputGroup inputLabel="卡號" width="input-w-sm-full">
              <input type="text" placeholder="1111 2222 3333 4444" />
            </InputGroup>
            <InputGroup inputLabel="有效期限" width="input-w-sm-s3">
             <input type="text" placeholder="MM/YY" />
            </InputGroup>
            <InputGroup inputLabel="CVC / CCV" width="input-w-sm-s3">
              <input type="text" placeholder="123" />
            </InputGroup>
          </FormContainer>
           */}
        </section>
        </section>
        <section className="cart-container col col-lg-5 col-sm-12">
         <h3 className="cart-title">購物籃</h3>
         <section className="product-list col col-12" data-total-price="0">
          <CartItem
            dataPrice={3999}
            imgFile="product-1.jpg"
            productName="破壞補丁修身牛仔褲"
          />
          <CartItem
            dataPrice={1299}
            imgFile="product-2.jpg"
            productName="刷色直筒牛仔褲"
          />
         </section>
         <section className="cart-info shipping col col-12">
            <div className="text">運費</div>
            <div className="price">免費</div>
          </section>
          <section className="cart-info total col col-12">
            <div className="text">小計</div>
            <div className="price">$0</div>
          </section>
        </section>
        
      </div>
    </main>
  );
}