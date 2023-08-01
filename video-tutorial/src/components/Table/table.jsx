import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"

 export  function CriyaaData(){
    
    return(
        <div>
           <TableContainer sx={{maxHeight:'400px'}}>
                <Table stickyHeader>                                                         
                    <TableHead >
                        <TableRow >
                            <TableCell sx={{fontWeight: 'bold'}}>Id</TableCell>
                            <TableCell sx={{fontWeight: 'bold'}}>First_Name</TableCell>
                            <TableCell sx={{fontWeight: 'bold'}}>Last_Name</TableCell>
                            <TableCell sx={{fontWeight: 'bold'}}>DOB</TableCell>
                            <TableCell sx={{fontWeight: 'bold'}}>Gender</TableCell>
                            <TableCell sx={{fontWeight: 'bold'}}>Email</TableCell>
                            <TableCell sx={{fontWeight: 'bold'}}>Mobile</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            TableData.map(data=>(
                                <TableRow key={data.id}>
                                    <TableCell>{data.id}</TableCell>
                                    <TableCell>{data.first_name}</TableCell>
                                    <TableCell>{data.last_name}</TableCell>
                                    <TableCell>{data.DOB}</TableCell>
                                    <TableCell>{data.gender}</TableCell>
                                    <TableCell>{data.email}</TableCell>
                                    <TableCell>{data.Phone}</TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
           </TableContainer>
        </div>
        // <div>
        //     <table className="table table-hover">
        //         <thead>
        //             <tr>
        //                 <th>Id</th>
        //                 <th>First_Name</th>
        //                 <th>Last_Name</th>
        //                 <th>DOB</th>
        //                 <th>Email</th>                             
        //                 <th>Phone</th>
        //             </tr>
        //         </thead>
        //         <tbody>
        //             {
        //                 TableData.map(Data=>(
        //                     <tr key={Data.id}>
        //                         <td>{Data.id}</td>
        //                         <td>{Data.first_name}</td>
        //                         <td>{Data.last_name}</td>
        //                         <td>{Data.DOB}</td>
        //                         <td>{Data.email}</td>
        //                         <td>{Data.Phone}</td>
        //                     </tr>
        //                 ))
        //             }
        //         </tbody>
        //     </table>
        // </div>
        )
}

const TableData =
[{"id":1,"first_name":"Katharine","last_name":"Morcomb","DOB":"2/28/2023","gender":"Female","email":"kmorcomb0@twitter.com","Phone":"+7 374 502 7146"},
{"id":2,"first_name":"Gay","last_name":"Chaplyn","DOB":"3/30/2023","gender":"Female","email":"gchaplyn1@joomla.org","Phone":"+970 540 828 3405"},
{"id":3,"first_name":"Ginnie","last_name":"Redmore","DOB":"7/18/2023","gender":"Female","email":"gredmore2@behance.net","Phone":"+86 871 646 3481"},
{"id":4,"first_name":"Adolphe","last_name":"Greenley","DOB":"11/5/2022","gender":"Male","email":"agreenley3@skype.com","Phone":"+62 170 931 7353"},
{"id":5,"first_name":"Tove","last_name":"Bilbee","DOB":"12/17/2022","gender":"Female","email":"tbilbee4@redcross.org","Phone":"+359 621 250 4126"},
{"id":6,"first_name":"Rosemarie","last_name":"Wigley","DOB":"6/1/2023","gender":"Non-binary","email":"rwigley5@drupal.org","Phone":"+86 977 948 2494"},
{"id":7,"first_name":"Reed","last_name":"Rosenzwig","DOB":"7/15/2023","gender":"Male","email":"rrosenzwig6@umich.edu","Phone":"+63 139 725 3507"},
{"id":8,"first_name":"Miles","last_name":"Weippert","DOB":"10/20/2022","gender":"Male","email":"mweippert7@theguardian.com","Phone":"+355 986 800 1177"},
{"id":9,"first_name":"Danny","last_name":"Chiswell","DOB":"3/15/2023","gender":"Male","email":"dchiswell8@google.de","Phone":"+48 551 388 8610"},
{"id":10,"first_name":"Washington","last_name":"Cardall","DOB":"7/24/2023","gender":"Male","email":"wcardall9@gizmodo.com","Phone":"+963 477 149 7933"}]