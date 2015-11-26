var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '0abd96eb-b292-41b1-b8f8-2206f3eec000', label: 'VALUE\n-2.5', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: -2.5<br>Type: CONSTANT_VALUE<br>Id: 0abd96eb-b292-41b1-b8f8-2206f3eec000<br>Formula Expression: Formula String: VALUE; Formula Values: -2.5; Formula Ptg: -2.5; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2cdd0d4b'},
{id: 'f41ed8a5-65e6-4086-9ed6-ecd26b5e6a53', label: 'ASINH\n-1.6472311463710965', color: '#f0ad4e', title: 'Name: ASINH<br>Alias: null<br>Value: -1.6472311463710965<br>Type: FUNCTION<br>Id: f41ed8a5-65e6-4086-9ed6-ecd26b5e6a53<br>Formula Expression: Formula String: ASINH(VALUE); Formula Values: ASINH(-2.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2cdd0d4b'},
{id: 'b0e3307d-4ad5-4f78-8c6d-dc44494055b5', label: 'B2\n-1.6472311463710965', color: '#31b0d5', title: 'Name: B2<br>Alias: null<br>Value: -1.6472311463710965<br>Type: CELL_WITH_FORMULA<br>Id: b0e3307d-4ad5-4f78-8c6d-dc44494055b5<br>Formula Expression: Formula String: ASINH(VALUE); Formula Values: ASINH(-2.5); Formula Ptg: -2.5 ASINH ; Ptgs: VALUE ASINH  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2cdd0d4b'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '0abd96eb-b292-41b1-b8f8-2206f3eec000', to: 'f41ed8a5-65e6-4086-9ed6-ecd26b5e6a53'},
{from: 'f41ed8a5-65e6-4086-9ed6-ecd26b5e6a53', to: 'b0e3307d-4ad5-4f78-8c6d-dc44494055b5'}
                            ]);