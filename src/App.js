import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <div class="container">
        <h2>ลงทะเบียนบัญชีเงินฝาก</h2>
        <form>
          <label>ชื่อ-สกุล</label>
          <input type="text" class="form-control"></input>
          <label>เลขที่บัญชี</label>
          <input type="text" class="form-control"></input>
          <input type="submit" value="บันทึก" class="btn btn-primary"></input>
        </form>
      </div>
    </div>
  );
}

function operation_out(){
  return(
    <div class="container">
      <h2>ทำรายการโอนเงิน</h2>
      <form>
        <input type="text" class="form-control"></input>
        <label>ช่องทางการโอน</label>
        <select id="cars" class="form-control">
          <option value="volvo">ทรูมันนี่</option>
          <option value="saab">เงินในบัญชี</option>
          <option value="vw">บัตรเครดิต</option>
        </select>
      </form>
    </div>
  )
}


function Show_Statemen(){
  return(
    <div class="container">
      <h2>Statement</h2>
      <table class="table table-hover">
        <tr>
          <th>เลขบัญชี</th>
          <th>จำนวนเงินเข้า</th>
          <th>จำนวนเงินออก</th>
          <th>ยอดเงินคงเหลือ</th>
        </tr>
      </table>
    </div>
  );
}
export default operation_out;
