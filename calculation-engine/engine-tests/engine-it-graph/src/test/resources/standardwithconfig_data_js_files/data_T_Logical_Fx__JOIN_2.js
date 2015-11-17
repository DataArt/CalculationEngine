var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'ee9893c3-e833-4fbb-ad76-c0ea12629cb4', label: 'D2\nexpected', color: '#31b0d5', title: 'Name: D2<br>Value: expected<br>Type: CELL_WITH_VALUE<br>Id: ee9893c3-e833-4fbb-ad76-c0ea12629cb4<br>Formula Expression: Formula String: D2; Formula Values: expected; Formula Ptg: expected; Ptgs: D2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7bede4ea'},
{id: '69cf626f-0c18-4a64-97bb-ed7492d3d08d', label: 'D5\nexpected', color: '#31b0d5', title: 'Name: D5<br>Value: expected<br>Type: CELL_WITH_FORMULA<br>Id: 69cf626f-0c18-4a64-97bb-ed7492d3d08d<br>Formula Expression: Formula String: T(D2); Formula Values: T(expected); Formula Ptg: expected T ; Ptgs: D2 T  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7bede4ea'},
{id: 'cc562408-c5d2-4061-9377-2735ee46c9fd', label: 'T\nexpected', color: '#f0ad4e', title: 'Name: T<br>Value: expected<br>Type: FUNCTION<br>Id: cc562408-c5d2-4061-9377-2735ee46c9fd<br>Formula Expression: Formula String: T(D2); Formula Values: T(expected); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7bede4ea'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'cc562408-c5d2-4061-9377-2735ee46c9fd', to: '69cf626f-0c18-4a64-97bb-ed7492d3d08d'},
{from: 'ee9893c3-e833-4fbb-ad76-c0ea12629cb4', to: 'cc562408-c5d2-4061-9377-2735ee46c9fd'}
                            ]);