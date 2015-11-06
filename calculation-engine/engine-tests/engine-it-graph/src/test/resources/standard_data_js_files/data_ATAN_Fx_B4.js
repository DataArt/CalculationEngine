var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '6e60fad2-f6b8-4607-8ae8-0d84ecaceb8a', label: 'B4\n45.0', color: '#31b0d5', title: 'Name: B4<br>Value: 45.0<br>Type: CELL_WITH_FORMULA<br>Id: 6e60fad2-f6b8-4607-8ae8-0d84ecaceb8a<br>Formula Expression: Formula String: ATAN(VALUE) * VALUE / PI(); Formula Values: ATAN(1.0) * 180.0 / PI(); Formula Ptg: 1.0 ATAN  180.0 *  PI  /; Ptgs: VALUE ATAN  VALUE *  PI  / Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@52af26ee'},
{id: '7d2e04ec-edd2-4244-b3a8-051d2c4a9fe8', label: '*\n141.3716694115407', color: '#f0ad4e', title: 'Name: *<br>Value: 141.3716694115407<br>Type: OPERATOR<br>Id: 7d2e04ec-edd2-4244-b3a8-051d2c4a9fe8<br>Formula Expression: Formula String: ATAN(VALUE) * VALUE; Formula Values: ATAN(1.0) * 180.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@52af26ee'},
{id: '04d31ed5-2270-41ea-8372-33a06bb2e53c', label: 'VALUE\n180.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 180.0<br>Type: CONSTANT_VALUE<br>Id: 04d31ed5-2270-41ea-8372-33a06bb2e53c<br>Formula Expression: Formula String: VALUE; Formula Values: 180.0; Formula Ptg: 180.0; Ptgs: VALUE Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@52af26ee'},
{id: 'e8f335e4-a18a-440f-98dd-1d0e540215ac', label: 'ATAN\n0.7853981633974483', color: '#f0ad4e', title: 'Name: ATAN<br>Value: 0.7853981633974483<br>Type: FUNCTION<br>Id: e8f335e4-a18a-440f-98dd-1d0e540215ac<br>Formula Expression: Formula String: ATAN(VALUE); Formula Values: ATAN(1.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@52af26ee'},
{id: '14583daa-491b-4c2a-8681-3b2a56ea8a45', label: '/\n45.0', color: '#f0ad4e', title: 'Name: /<br>Value: 45.0<br>Type: OPERATOR<br>Id: 14583daa-491b-4c2a-8681-3b2a56ea8a45<br>Formula Expression: Formula String: ATAN(VALUE) * VALUE / PI(); Formula Values: ATAN(1.0) * 180.0 / PI(); Formula Ptg: ; Ptgs:  Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@52af26ee'},
{id: 'ebb5db2e-87f7-4565-a81b-92d8192b4220', label: 'VALUE\n1.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 1.0<br>Type: CONSTANT_VALUE<br>Id: ebb5db2e-87f7-4565-a81b-92d8192b4220<br>Formula Expression: Formula String: VALUE; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@52af26ee'},
{id: '16e6a3e8-9c31-407b-bb0d-df94562afea2', label: 'PI\n3.141592653589793', color: '#f0ad4e', title: 'Name: PI<br>Value: 3.141592653589793<br>Type: FUNCTION<br>Id: 16e6a3e8-9c31-407b-bb0d-df94562afea2<br>Formula Expression: Formula String: PI(); Formula Values: PI(); Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@52af26ee'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'ebb5db2e-87f7-4565-a81b-92d8192b4220', to: 'e8f335e4-a18a-440f-98dd-1d0e540215ac'},
{from: '14583daa-491b-4c2a-8681-3b2a56ea8a45', to: '6e60fad2-f6b8-4607-8ae8-0d84ecaceb8a'},
{from: '7d2e04ec-edd2-4244-b3a8-051d2c4a9fe8', to: '14583daa-491b-4c2a-8681-3b2a56ea8a45'},
{from: 'e8f335e4-a18a-440f-98dd-1d0e540215ac', to: '7d2e04ec-edd2-4244-b3a8-051d2c4a9fe8'},
{from: '04d31ed5-2270-41ea-8372-33a06bb2e53c', to: '7d2e04ec-edd2-4244-b3a8-051d2c4a9fe8'},
{from: '16e6a3e8-9c31-407b-bb0d-df94562afea2', to: '14583daa-491b-4c2a-8681-3b2a56ea8a45'}
                            ]);