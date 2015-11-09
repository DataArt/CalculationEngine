var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '828eacfe-3103-48fa-9e7e-3a0dbe5c1e15', label: 'VALUE\n10.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 10.0<br>Type: CONSTANT_VALUE<br>Id: 828eacfe-3103-48fa-9e7e-3a0dbe5c1e15<br>Formula Expression: Formula String: VALUE; Formula Values: 10.0; Formula Ptg: 10.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7f608e21'},
{id: '8d79e52b-140d-472e-ab18-8d52fde75439', label: 'ACOSH\n2.993222846126381', color: '#f0ad4e', title: 'Name: ACOSH<br>Value: 2.993222846126381<br>Type: FUNCTION<br>Id: 8d79e52b-140d-472e-ab18-8d52fde75439<br>Formula Expression: Formula String: ACOSH(VALUE); Formula Values: ACOSH(10.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7f608e21'},
{id: '8154601a-de70-47fa-af6e-7f70f371d3df', label: 'ACOSH\n5.192925985263684', color: '#f0ad4e', title: 'Name: ACOSH<br>Value: 5.192925985263684<br>Type: FUNCTION<br>Id: 8154601a-de70-47fa-af6e-7f70f371d3df<br>Formula Expression: Formula String: ACOSH(C2); Formula Values: ACOSH(90.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7f608e21'},
{id: '31e00418-bd41-406e-a9a8-7d1017c5c589', label: 'E5\n5.192925985263684', color: '#31b0d5', title: 'Name: E5<br>Value: 5.192925985263684<br>Type: CELL_WITH_FORMULA<br>Id: 31e00418-bd41-406e-a9a8-7d1017c5c589<br>Formula Expression: Formula String: ACOSH(C2); Formula Values: ACOSH(90.0); Formula Ptg: 90.0 ACOSH ; Ptgs: C2 ACOSH  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7f608e21'},
{id: 'e0629922-7eff-4150-bc18-e49f8a1729a9', label: 'A1\n2.993222846126381', color: '#31b0d5', title: 'Name: A1<br>Value: 2.993222846126381<br>Type: CELL_WITH_FORMULA<br>Id: e0629922-7eff-4150-bc18-e49f8a1729a9<br>Formula Expression: Formula String: ACOSH(VALUE); Formula Values: ACOSH(10.0); Formula Ptg: 10.0 ACOSH ; Ptgs: VALUE ACOSH  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7f608e21'},
{id: '61bd3f24-9c80-4561-ad7a-0cad9b0850f2', label: 'C2\n90.0', color: '#31b0d5', title: 'Name: C2<br>Value: 90.0<br>Type: CELL_WITH_VALUE<br>Id: 61bd3f24-9c80-4561-ad7a-0cad9b0850f2<br>Formula Expression: Formula String: C2; Formula Values: 90.0; Formula Ptg: 90.0; Ptgs: C2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7f608e21'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '8154601a-de70-47fa-af6e-7f70f371d3df', to: '31e00418-bd41-406e-a9a8-7d1017c5c589'},
{from: '828eacfe-3103-48fa-9e7e-3a0dbe5c1e15', to: '8d79e52b-140d-472e-ab18-8d52fde75439'},
{from: '8d79e52b-140d-472e-ab18-8d52fde75439', to: 'e0629922-7eff-4150-bc18-e49f8a1729a9'},
{from: '61bd3f24-9c80-4561-ad7a-0cad9b0850f2', to: '8154601a-de70-47fa-af6e-7f70f371d3df'}
                            ]);