from flask import Flask, render_template, request, jsonify
from neo_db.query_graph import query, all_graph, get_KGQA_answer, get_answer_profile
app = Flask(__name__)


@app.route('/', methods=['GET', 'POST'])
@app.route('/index', methods=['GET', 'POST'])
def index(name=None):
    return render_template('all_relation.html', name = name)

@app.route('/search', methods=['GET', 'POST'])
def search():
    return render_template('search.html')


@app.route('/fold', methods=['GET', 'POST'])
def fold():
    return render_template('fold.html')


@app.route('/graph_json', methods=['GET', 'POST'])
def graph_json():
    json_data = {"name": "Original",
                 "children": [{"name": "analytics",
                               "children": [{"name": "cluster",
                                             "children": [{"name": "AgglomerativeCluster", "size": 3938},
                                                          {"name": "CommunityStructure", "size": 3812},
                                                          {"name": "HierarchicalCluster", "size": 6714},
                                                          {"name": "MergeEdge", "size": 743}
                                                          ]
                                             },
                                            {
                                                "name": "graph",
                                                "children": [
                                                    {"name": "BetweennessCentrality", "size": 3534},
                                                    {"name": "LinkDistance", "size": 5731},
                                                    {"name": "MaxFlowMinCut", "size": 7840},
                                                    {"name": "ShortestPaths", "size": 5914},
                                                    {"name": "SpanningTree", "size": 3416}
                                                ]
                                            },
                                            {
                                                "name": "optimization",
                                                "children": [
                                                    {"name": "AspectRatioBanker", "size": 7074}
                                                ]
                                            }
                                            ]
                               }
                              ]
                 }
    # json_data1 = {"name": "AI",
    #              "children": [{"name": "analytics",
    #                            "children": [{"name": "cluster",
    #                                          "children": [{"name": "AgglomerativeCluster", "size": 3938},
    #                                                       {"name": "CommunityStructure", "size": 3812},
    #                                                       {"name": "HierarchicalCluster", "size": 6714},
    #                                                       {"name": "MergeEdge", "size": 743}
    #                                                       ]
    #                                          },
    #                                         {
    #                                             "name": "graph",
    #                                             "children": [
    #                                                 {"name": "BetweennessCentrality", "size": 3534},
    #                                                 {"name": "LinkDistance", "size": 5731},
    #                                                 {"name": "MaxFlowMinCut", "size": 7840},
    #                                                 {"name": "ShortestPaths", "size": 5914},
    #                                                 {"name": "SpanningTree", "size": 3416}
    #                                             ]
    #                                         },
    #                                         {
    #                                             "name": "optimization",
    #                                             "children": [
    #                                                 {"name": "AspectRatioBanker", "size": 7074}
    #                                             ]
    #                                         }
    #                                         ]
    #                            }
    #
    #                           ]
    #              }
    return jsonify(json_data)

@app.route('/get_profile',methods=['GET','POST'])
def get_profile():
    name = request.args.get('character_name')
    json_data = get_answer_profile(name)
    return jsonify(json_data)

# @app.route('/KGQA_answer', methods=['GET', 'POST'])
# def KGQA_answer():
#     question = request.args.get('name')
#     json_data = get_KGQA_answer(get_target_array(str(question)))
#     return jsonify(json_data)
@app.route('/search_name', methods=['GET', 'POST'])
def search_name():
    name = request.args.get('name')
    json_data=query(str(name))
    return jsonify(json_data)


@app.route('/all_kg', methods=['GET', 'POST'])
def all_kg():
    json_data = all_graph()
    return jsonify(json_data)

@app.route('/get_all_relation', methods=['GET', 'POST'])
def get_all_relation():
    return render_template('all_relation.html')

if __name__ == '__main__':
    app.debug=True
    app.run()
