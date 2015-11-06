var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'b7f9ffca-9d6e-41e0-bdaa-fac74089de1d', label: '+\n372.0', color: '#f0ad4e', title: 'Name: +<br>Value: 372.0<br>Type: OPERATOR<br>Id: b7f9ffca-9d6e-41e0-bdaa-fac74089de1d<br>Formula Expression: Formula String: E1 + D3; Formula Values: 5.0 + 367.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6ab778a'},
{id: '81f00996-7222-4d02-ae3f-ff2eb469f3ce', label: 'E1\n5.0', color: '#31b0d5', title: 'Name: E1<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: 81f00996-7222-4d02-ae3f-ff2eb469f3ce<br>Formula Expression: Formula String: E1; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: E1 Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6ab778a'},
{id: '8f3ae82e-29c8-43f0-ae3d-51aff5b9eabc', label: 'VALUE\n1.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 1.0<br>Type: CONSTANT_VALUE<br>Id: 8f3ae82e-29c8-43f0-ae3d-51aff5b9eabc<br>Formula Expression: Formula String: VALUE; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6ab778a'},
{id: '4c622e85-332b-477d-a607-ec9e435dc654', label: '=\nFALSE', color: '#f0ad4e', title: 'Name: =<br>Value: FALSE<br>Type: OPERATOR<br>Id: 4c622e85-332b-477d-a607-ec9e435dc654<br>Formula Expression: Formula String: E1 + D3 = C4; Formula Values: 5.0 + 367.0 = 89.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 7 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6ab778a'},
{id: 'e089afaa-3496-4915-b944-1d4b491840f8', label: 'AND\nFALSE', color: '#f0ad4e', title: 'Name: AND<br>Value: FALSE<br>Type: FUNCTION<br>Id: e089afaa-3496-4915-b944-1d4b491840f8<br>Formula Expression: Formula String: AND(E1 + D3 = C4, VALUE < D1); Formula Values: AND(5.0 + 367.0 = 89.0, 1.0 < 0.4); Formula Ptg: ; Ptgs:  Index in Ptgs: 8 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6ab778a'},
{id: 'e810f9d3-d20f-44ea-8985-0047200e7c0f', label: 'C4\n89.0', color: '#31b0d5', title: 'Name: C4<br>Value: 89.0<br>Type: CELL_WITH_VALUE<br>Id: e810f9d3-d20f-44ea-8985-0047200e7c0f<br>Formula Expression: Formula String: C4; Formula Values: 89.0; Formula Ptg: 89.0; Ptgs: C4 Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6ab778a'},
{id: '36c26a64-6066-4890-bba6-786e6742b3b7', label: 'D1\n0.4', color: '#31b0d5', title: 'Name: D1<br>Value: 0.4<br>Type: CELL_WITH_VALUE<br>Id: 36c26a64-6066-4890-bba6-786e6742b3b7<br>Formula Expression: Formula String: D1; Formula Values: 0.4; Formula Ptg: 0.4; Ptgs: D1 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6ab778a'},
{id: 'f508ff7c-a260-48ed-8886-7b51abf37997', label: 'D3\n367.0', color: '#31b0d5', title: 'Name: D3<br>Value: 367.0<br>Type: CELL_WITH_VALUE<br>Id: f508ff7c-a260-48ed-8886-7b51abf37997<br>Formula Expression: Formula String: D3; Formula Values: 367.0; Formula Ptg: 367.0; Ptgs: D3 Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6ab778a'},
{id: '24db0d3a-47ef-4650-a77b-8f92e7302a25', label: 'F5\nFALSE', color: '#31b0d5', title: 'Name: F5<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: 24db0d3a-47ef-4650-a77b-8f92e7302a25<br>Formula Expression: Formula String: AND(E1 + D3 = C4, VALUE < D1); Formula Values: AND(5.0 + 367.0 = 89.0, 1.0 < 0.4); Formula Ptg: 5.0 367.0 + 89.0 =, 1.0 0.4 < AND ; Ptgs: E1 D3 + C4 =, VALUE D1 < AND  Index in Ptgs: 8 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6ab778a'},
{id: '3dd20963-0068-4aa7-8dad-24243b0dbb0e', label: '<\nFALSE', color: '#f0ad4e', title: 'Name: <<br>Value: FALSE<br>Type: OPERATOR<br>Id: 3dd20963-0068-4aa7-8dad-24243b0dbb0e<br>Formula Expression: Formula String: VALUE < D1; Formula Values: 1.0 < 0.4; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6ab778a'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '8f3ae82e-29c8-43f0-ae3d-51aff5b9eabc', to: '3dd20963-0068-4aa7-8dad-24243b0dbb0e'},
{from: 'f508ff7c-a260-48ed-8886-7b51abf37997', to: 'b7f9ffca-9d6e-41e0-bdaa-fac74089de1d'},
{from: '36c26a64-6066-4890-bba6-786e6742b3b7', to: '3dd20963-0068-4aa7-8dad-24243b0dbb0e'},
{from: '4c622e85-332b-477d-a607-ec9e435dc654', to: 'e089afaa-3496-4915-b944-1d4b491840f8'},
{from: '81f00996-7222-4d02-ae3f-ff2eb469f3ce', to: 'b7f9ffca-9d6e-41e0-bdaa-fac74089de1d'},
{from: 'e810f9d3-d20f-44ea-8985-0047200e7c0f', to: '4c622e85-332b-477d-a607-ec9e435dc654'},
{from: '3dd20963-0068-4aa7-8dad-24243b0dbb0e', to: 'e089afaa-3496-4915-b944-1d4b491840f8'},
{from: 'b7f9ffca-9d6e-41e0-bdaa-fac74089de1d', to: '4c622e85-332b-477d-a607-ec9e435dc654'},
{from: 'e089afaa-3496-4915-b944-1d4b491840f8', to: '24db0d3a-47ef-4650-a77b-8f92e7302a25'}
                            ]);