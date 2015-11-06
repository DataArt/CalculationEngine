var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '21fa724c-0e86-4b6a-b2b4-2adcd4ee5229', label: 'B3\n26.56505117707799', color: '#31b0d5', title: 'Name: B3<br>Value: 26.56505117707799<br>Type: CELL_WITH_FORMULA<br>Id: 21fa724c-0e86-4b6a-b2b4-2adcd4ee5229<br>Formula Expression: Formula String: ATAN(VALUE) * VALUE / PI(); Formula Values: ATAN(0.5) * 180.0 / PI(); Formula Ptg: 0.5 ATAN  180.0 *  PI  /; Ptgs: VALUE ATAN  VALUE *  PI  / Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@505fc5a4'},
{id: '58da801c-83fc-4ae3-b529-426974c28e22', label: '/\n26.56505117707799', color: '#f0ad4e', title: 'Name: /<br>Value: 26.56505117707799<br>Type: OPERATOR<br>Id: 58da801c-83fc-4ae3-b529-426974c28e22<br>Formula Expression: Formula String: ATAN(VALUE) * VALUE / PI(); Formula Values: ATAN(0.5) * 180.0 / PI(); Formula Ptg: ; Ptgs:  Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@505fc5a4'},
{id: 'f8dfc0bf-4ada-4f8e-8ecb-0de0cac9d166', label: 'VALUE\n180.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 180.0<br>Type: CONSTANT_VALUE<br>Id: f8dfc0bf-4ada-4f8e-8ecb-0de0cac9d166<br>Formula Expression: Formula String: VALUE; Formula Values: 180.0; Formula Ptg: 180.0; Ptgs: VALUE Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@505fc5a4'},
{id: 'b225b2ac-c1dd-4c1e-8799-c08638a83099', label: 'PI\n3.141592653589793', color: '#f0ad4e', title: 'Name: PI<br>Value: 3.141592653589793<br>Type: FUNCTION<br>Id: b225b2ac-c1dd-4c1e-8799-c08638a83099<br>Formula Expression: Formula String: PI(); Formula Values: PI(); Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@505fc5a4'},
{id: '0dc671f4-aee8-4195-adff-d28ab605a08f', label: 'VALUE\n0.5', color: '#31b0d5', title: 'Name: VALUE<br>Value: 0.5<br>Type: CONSTANT_VALUE<br>Id: 0dc671f4-aee8-4195-adff-d28ab605a08f<br>Formula Expression: Formula String: VALUE; Formula Values: 0.5; Formula Ptg: 0.5; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@505fc5a4'},
{id: '39cd01e9-46ae-4abb-b34d-4fcc4b4ebce6', label: 'ATAN\n0.4636476090008061', color: '#f0ad4e', title: 'Name: ATAN<br>Value: 0.4636476090008061<br>Type: FUNCTION<br>Id: 39cd01e9-46ae-4abb-b34d-4fcc4b4ebce6<br>Formula Expression: Formula String: ATAN(VALUE); Formula Values: ATAN(0.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@505fc5a4'},
{id: 'be64aea2-fd52-4c08-9541-75654fa9e808', label: '*\n83.4565696201451', color: '#f0ad4e', title: 'Name: *<br>Value: 83.4565696201451<br>Type: OPERATOR<br>Id: be64aea2-fd52-4c08-9541-75654fa9e808<br>Formula Expression: Formula String: ATAN(VALUE) * VALUE; Formula Values: ATAN(0.5) * 180.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@505fc5a4'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'b225b2ac-c1dd-4c1e-8799-c08638a83099', to: '58da801c-83fc-4ae3-b529-426974c28e22'},
{from: '0dc671f4-aee8-4195-adff-d28ab605a08f', to: '39cd01e9-46ae-4abb-b34d-4fcc4b4ebce6'},
{from: '39cd01e9-46ae-4abb-b34d-4fcc4b4ebce6', to: 'be64aea2-fd52-4c08-9541-75654fa9e808'},
{from: 'be64aea2-fd52-4c08-9541-75654fa9e808', to: '58da801c-83fc-4ae3-b529-426974c28e22'},
{from: '58da801c-83fc-4ae3-b529-426974c28e22', to: '21fa724c-0e86-4b6a-b2b4-2adcd4ee5229'},
{from: 'f8dfc0bf-4ada-4f8e-8ecb-0de0cac9d166', to: 'be64aea2-fd52-4c08-9541-75654fa9e808'}
                            ]);