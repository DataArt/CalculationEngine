var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '2f59863d-bd47-454b-bd89-fa925fbe164a', label: 'VALUE\nDEVDEF', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: DEVDEF<br>Type: CONSTANT_VALUE<br>Id: 2f59863d-bd47-454b-bd89-fa925fbe164a<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF; Formula Ptg: DEVDEF; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3daa422a'},
{id: '04cd96fc-4cf5-4ecf-8dc4-15bab46ee235', label: 'FUNCEXEC\n1.0471975511965979', color: '#f0ad4e', title: 'Name: FUNCEXEC<br>Alias: null<br>Value: 1.0471975511965979<br>Type: FUNCTION<br>Id: 04cd96fc-4cf5-4ecf-8dc4-15bab46ee235<br>Formula Expression: Formula String: FUNCEXEC(B2, VALUE); Formula Values: FUNCEXEC(0.5, DEVDEF); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3daa422a'},
{id: '743b1cd9-22c7-4b10-ba0a-c5a7e9361d6f', label: 'B2\n0.5', color: '#31b0d5', title: 'Name: B2<br>Alias: null<br>Value: 0.5<br>Type: CELL_WITH_VALUE<br>Id: 743b1cd9-22c7-4b10-ba0a-c5a7e9361d6f<br>Formula Expression: Formula String: B2; Formula Values: 0.5; Formula Ptg: 0.5; Ptgs: B2 Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3daa422a'},
{id: '349aa8bd-d4a1-46ba-a70a-e6d498fe6a6b', label: 'C6\n1.0471975511965979', color: '#31b0d5', title: 'Name: C6<br>Alias: null<br>Value: 1.0471975511965979<br>Type: CELL_WITH_FORMULA<br>Id: 349aa8bd-d4a1-46ba-a70a-e6d498fe6a6b<br>Formula Expression: Formula String: FUNCEXEC(B2, VALUE); Formula Values: FUNCEXEC(0.5, DEVDEF); Formula Ptg: 0.5, DEVDEF FUNCEXEC ; Ptgs: B2, VALUE FUNCEXEC  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3daa422a'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '2f59863d-bd47-454b-bd89-fa925fbe164a', to: '04cd96fc-4cf5-4ecf-8dc4-15bab46ee235'},
{from: '743b1cd9-22c7-4b10-ba0a-c5a7e9361d6f', to: '04cd96fc-4cf5-4ecf-8dc4-15bab46ee235'},
{from: '04cd96fc-4cf5-4ecf-8dc4-15bab46ee235', to: '349aa8bd-d4a1-46ba-a70a-e6d498fe6a6b'}
                            ]);