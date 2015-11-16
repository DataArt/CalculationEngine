var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '35b194e1-a2d3-4c00-b64e-f6601e6c0e48', label: 'ASIN\n1.5707963267948966', color: '#f0ad4e', title: 'Name: ASIN<br>Value: 1.5707963267948966<br>Type: FUNCTION<br>Id: 35b194e1-a2d3-4c00-b64e-f6601e6c0e48<br>Formula Expression: Formula String: ASIN(A2); Formula Values: ASIN(1.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@62d5617'},
{id: '475de11f-044a-498c-9597-a91a7135ebaf', label: 'E3\n1.5707963267948966', color: '#31b0d5', title: 'Name: E3<br>Value: 1.5707963267948966<br>Type: CELL_WITH_FORMULA<br>Id: 475de11f-044a-498c-9597-a91a7135ebaf<br>Formula Expression: Formula String: ASIN(A2); Formula Values: ASIN(1.0); Formula Ptg: 1.0 ASIN ; Ptgs: A2 ASIN  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@62d5617'},
{id: 'b31adebd-5d7f-44e3-9890-dad45ed855cf', label: 'C1\n-0.5235987755982989', color: '#31b0d5', title: 'Name: C1<br>Value: -0.5235987755982989<br>Type: CELL_WITH_FORMULA<br>Id: b31adebd-5d7f-44e3-9890-dad45ed855cf<br>Formula Expression: Formula String: ASIN(VALUE); Formula Values: ASIN(-0.5); Formula Ptg: -0.5 ASIN ; Ptgs: VALUE ASIN  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@62d5617'},
{id: 'b7c53545-8384-44c8-aaf0-037a4e7dab9a', label: 'VALUE\n-0.5', color: '#31b0d5', title: 'Name: VALUE<br>Value: -0.5<br>Type: CONSTANT_VALUE<br>Id: b7c53545-8384-44c8-aaf0-037a4e7dab9a<br>Formula Expression: Formula String: VALUE; Formula Values: -0.5; Formula Ptg: -0.5; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@62d5617'},
{id: '3708b4ff-abf8-44a6-975f-2997e070789c', label: 'ASIN\n-0.5235987755982989', color: '#f0ad4e', title: 'Name: ASIN<br>Value: -0.5235987755982989<br>Type: FUNCTION<br>Id: 3708b4ff-abf8-44a6-975f-2997e070789c<br>Formula Expression: Formula String: ASIN(VALUE); Formula Values: ASIN(-0.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@62d5617'},
{id: 'ed68bc9d-c71a-48b7-a4b9-128902e27a1c', label: 'A2\n1.0', color: '#31b0d5', title: 'Name: A2<br>Value: 1.0<br>Type: CELL_WITH_VALUE<br>Id: ed68bc9d-c71a-48b7-a4b9-128902e27a1c<br>Formula Expression: Formula String: A2; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: A2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@62d5617'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'ed68bc9d-c71a-48b7-a4b9-128902e27a1c', to: '35b194e1-a2d3-4c00-b64e-f6601e6c0e48'},
{from: 'b7c53545-8384-44c8-aaf0-037a4e7dab9a', to: '3708b4ff-abf8-44a6-975f-2997e070789c'},
{from: '3708b4ff-abf8-44a6-975f-2997e070789c', to: 'b31adebd-5d7f-44e3-9890-dad45ed855cf'},
{from: '35b194e1-a2d3-4c00-b64e-f6601e6c0e48', to: '475de11f-044a-498c-9597-a91a7135ebaf'}
                            ]);