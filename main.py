from flask import Flask, render_template, request, jsonify
from neo_db.query_graph import query, get_KGQA_answer, get_answer_profile

app = Flask(__name__)


@app.route('/', methods=['GET', 'POST'])
@app.route('/fold', methods=['GET', 'POST'])
def fold():
    return render_template('fold.html')


@app.route('/graph_json', methods=['GET', 'POST'])
def graph_json():
    json_data = {"name": "flare",
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
    return jsonify(json_data)


if __name__ == '__main__':
    app.debug = True
    app.run()
