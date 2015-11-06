var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '92e661cb-8635-4870-b9d6-830302f57b4a', label: 'VALUE\n20.08554', color: '#31b0d5', title: 'Name: VALUE<br>Value: 20.08554<br>Type: CONSTANT_VALUE<br>Id: 92e661cb-8635-4870-b9d6-830302f57b4a<br>Formula Expression: Formula String: VALUE; Formula Values: 20.08554; Formula Ptg: 20.08554; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@59942b48'},
{id: '86ca298e-bdec-424c-906e-c9b97a08e0a2', label: 'C4\n3.000000153185454', color: '#31b0d5', title: 'Name: C4<br>Value: 3.000000153185454<br>Type: CELL_WITH_FORMULA<br>Id: 86ca298e-bdec-424c-906e-c9b97a08e0a2<br>Formula Expression: Formula String: LN(VALUE); Formula Values: LN(20.08554); Formula Ptg: 20.08554 LN ; Ptgs: VALUE LN  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@59942b48'},
{id: 'c3a37c84-4b33-4a0f-8ac5-fa21ca4406cf', label: 'LN\n3.000000153185454', color: '#f0ad4e', title: 'Name: LN<br>Value: 3.000000153185454<br>Type: FUNCTION<br>Id: c3a37c84-4b33-4a0f-8ac5-fa21ca4406cf<br>Formula Expression: Formula String: LN(VALUE); Formula Values: LN(20.08554); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@59942b48'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '92e661cb-8635-4870-b9d6-830302f57b4a', to: 'c3a37c84-4b33-4a0f-8ac5-fa21ca4406cf'},
{from: 'c3a37c84-4b33-4a0f-8ac5-fa21ca4406cf', to: '86ca298e-bdec-424c-906e-c9b97a08e0a2'}
                            ]);