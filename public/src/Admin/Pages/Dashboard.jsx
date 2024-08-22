import React from 'react'
import Table from 'react-bootstrap/Table';
import { LineChart } from '@mui/x-charts/LineChart';
import Stack from '@mui/material/Stack';
import { Gauge } from '@mui/x-charts/Gauge';

export default function Dashboard() {
  return (
    <>
      <div className="dashboard ms-4">
        <h1 className='text-start  mt-2'>Dashboard</h1>
        <p className='text-start '>Welcome to your dashboard</p>

        <div className="row gap-2">
          <div className="col-md-3 Boxs">
            <div className="row p-3">
              <div className="col-md-8 text-start">
                <i class="bi bi-envelope" id ='dash'></i>
                <h5>12,361</h5>
                <p>Emails Sent</p>
              </div>
              <div className="col-md-4">
                <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 1, md: 3 }} className='stack'>
                  <Gauge width={50} height={50} value={60} />
                </Stack>
                <p className='text-center'>+14%</p>
              </div>
            </div>
          </div>

          <div className="col-md-3 Boxs">
            <div className="row p-3">
              <div className="col-md-8 text-start">
              <i class="bi bi-laptop-fill" id ='dash'></i>            
                <h5>431,225</h5>
                <p>Sales Obtained</p>
              </div>
              <div className="col-md-4">
                <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 1, md: 3 }} className='stack'>
                  <Gauge width={50} height={50} value={80} />
                </Stack>
                <p className='text-center'>+21%</p>
              </div>
            </div>
          </div>

          <div className="col-md-3 Boxs">
            <div className="row p-3">
              <div className="col-md-8 text-start">
                <i class="bi bi-person-plus-fill" id ='dash'></i>                  
                <h5>32,441</h5>
                <p>New Clients</p>
              </div>
              <div className="col-md-4">
                <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 1, md: 3 }} className='stack'>
                  <Gauge width={50} height={50} value={40} />
                </Stack>
                <p className='text-center'>+5%</p>
              </div>
            </div>
          </div>

          <div className="col-md-3 Boxs">
            <div className="row p-3">
              <div className="col-md-8 text-start">
                <i class="bi bi-stoplights-fill" id ='dash'></i>
                <h5>1,325,134</h5>
                <p>Traffic Received</p>
              </div>
              <div className="col-md-4">
                <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 1, md: 3 }} className='stack'>
                  <Gauge width={50} height={50} value={20} />
                </Stack>
                <p className='text-center'>+43%</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-7">
            <div className="line-chart p-2 py-4 text-start">
              <h6 className='ps-4'>Revenue Genreted</h6>
              <p className='ps-4'>$59,342.32</p>
              <LineChart
                xAxis={[{ data: [1, 2, 3, 5, 8, 10, 12, 15, 16] }]}
                series={[
                  {
                    data: [2, 5.5, 2, 8.5, 1.5, 5],
                    valueFormatter: (value) => (value == null ? 'NaN' : value.toString()),
                  },
                  {
                    data: [null, null, null, null, 5.5, 2, 8.5, 1.5, 5],
                  },
                  {
                    data: [7, 8, 5, 4, null, null, 2, 5.5, 1],
                    valueFormatter: (value) => (value == null ? '?' : value.toString()),
                  },
                ]}
                height={300}
                margin={{ top: 10, bottom: 20 }}
              />
            </div>
          </div>
          <div className="col-md-5 p-0 m-0">
            <div className="transection p-2">

              <h5>Recent Transactions</h5>


              <Table  className='mt-5' >

                <tbody className='text-white '>
                  <tr>
                    <td>01e4dsa
                      <p>joh ndoe</p>
                    </td>
                    <td>2021-09-01</td>
                    <td><button>$43.95</button></td>
                  </tr>
                  <tr>
                    <td>01e4dsa
                      <p>joh ndoe</p>
                    </td>
                    <td>2021-09-01</td>
                    <td><button>$43.95</button></td>
                  </tr>
                  <tr>
                    <td>01e4dsa
                      <p>joh ndoe</p>
                    </td>
                    <td>2021-09-01</td>
                    <td><button>$43.95</button></td>
                  </tr>
                  <tr>
                    <td>01e4dsa
                      <p>joh ndoe</p>
                    </td>
                    <td>2021-09-01</td>
                    <td><button>$43.95</button></td>
                  </tr>
             
                </tbody>
              </Table>

            </div>
          </div>
        </div>

      </div>
  
    </>
  )
}
