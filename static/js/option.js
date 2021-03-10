//var color = ['#c23531', '#2f4554', '#61a0a8', '#d48265', '#91c7ae', '#749f83', '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3'];
//这部分模拟数据库传来的数据，只是无法交互更新
var categories = [{
	name: 0,

}, {
	name: 1,

}, {
	name: 2,

}, {
	name: 3,

}, {
	name: 4,

}, {
	name: 5,

}]
var graph = {
	data: [{
		name: 'ArtificialIntelligence',
		category: 0,
		number: 0,
		itemStyle: {
			normal: {
				//	color: "#009800",
				opacity: 1

			}
		}
	}, {
		name: 'DataMining',
		number: 1,
		category: 1,

		itemStyle: {
			normal: {
				opacity: 1
			}
		}
	}, {
		name: 'MachineLearning',

		category: 1,
		// draggable: true,
	}, {
		name: 'ComputerVision',

		category: 1,
		// draggable: true,
	}, {
		name: 'NaturalLanguageProcessing',

		category: 1,
		// draggable: true,
	}, {
		name: 'Robotics',

		category: 1,
		//  draggable: true,
	}, {
		name: 'InformationRetrieval',

		category: 1,
		// draggable: true,
	}, {
		name: 'Human-computerInteraction',

		category: 1,
		//  draggable: true,
	}, {
		name: 'AnomalyDetection',

		category: 2,
		// draggable: true,
	}, {
		name: 'AssociationRuleLearning',

		category: 2,
		// draggable: true,
	}, {
		name: 'Clustering',

		category: 2,
		// draggable: true,
	}, {
		name: 'Classification',

		category: 2,
		// draggable: true,
	}, {
		name: 'Regression',

		category: 2,
		//  draggable: true,
	}, {
		name: 'Summarization',

		category: 2,
		//  draggable: true,
	}, {
		name: 'Embedding',

		category: 2,
		//  draggable: true,
	}, {
		name: 'DimensionalityReduction',

		category: 2,
		//  draggable: true,
	}, {
		name: 'NetworkEmbedding',

		category: 3,
		//  draggable: true,
	}, {
		name: 'NodeRepresentationLearning',

		category: 3,
		//  draggable: true,
	}, {
		name: 'SupervisedLearning',

		category: 2,
		//  draggable: true,
	}, {
		name: 'UnsupervisedLearning',

		category: 2,
		//  draggable: true,
	}, {
		name: 'Semi-SupervisedLearning',

		category: 2,
		//  draggable: true,
	}, {
		name: 'ReinforcementLearning',

		category: 2,
		//  draggable: true,
	}, {
		name: 'SelfLearning',

		category: 2,
		//  draggable: true,
	}, {
		name: 'ArtificialNeuralNetworks',

		category: 2,
		//  draggable: true,
	}, {
		name: 'DecisionTrees',

		category: 2,
		//  draggable: true,
	}, {
		name: 'SupportVectorMachines',

		category: 2,
		//  draggable: true,
	}, {
		name: 'RegressionAnalysis',

		category: 2,
		//  draggable: true,
	}, {
		name: 'BayesianNetworks',

		category: 2,
		//  draggable: true,
	}, {
		name: 'GeneticAlgorithms',

		category: 2,
		//  draggable: true,
	}, {
		name: 'GraphNeuralNetworks',

		category: 4,
		//  draggable: true,
	}, {
		name: 'SpectralEmbedding',

		category: 4,
		//  draggable: true,
	}
	],
	links: [{
		source: 'ArtificialIntelligence',
		target: 'DataMining',

	}, {
		source: 'ArtificialIntelligence',
		target: 'MachineLearning',
	}, {
		source: 'ArtificialIntelligence',
		target: 'ComputerVision',
	}, {
		source: 'ArtificialIntelligence',
		target: 'NaturalLanguageProcessing',

	}, {
		source: 'ArtificialIntelligence',
		target: 'Robotics',
	}, {
		source: 'ArtificialIntelligence',
		target: 'InformationRetrieval',
	}, {
		source: 'ArtificialIntelligence',
		target: 'Human-computerInteraction',

	}, {
		source: 'DataMining',
		target: 'AnomalyDetection',
	}, {
		source: 'DataMining',
		target: 'AssociationRuleLearning',
	}, {
		source: 'DataMining',
		target: 'Clustering',

	}, {
		source: 'DataMining',
		target: 'Classification',
	}, {
		source: 'DataMining',
		target: 'Regression',
	}, {
		source: 'DataMining',
		target: 'Summarization',
	}, {
		source: 'DataMining',
		target: 'Embedding',

	}, {
		source: 'Embedding',
		target: 'DimensionalityReduction',
	}, {
		source: 'DimensionalityReduction',
		target: 'Embedding',
	}, {
		source: 'Embedding',
		target: 'NetworkEmbedding',
	}, {
		source: 'NodeRepresentationLearning',
		target: 'NetworkEmbedding',

	}, {
		source: 'NetworkEmbedding',
		target: 'NodeRepresentationLearning',
	}, {
		source: 'MachineLearning',
		target: 'SupervisedLearning',
	}, {
		source: 'MachineLearning',
		target: 'UnsupervisedLearning',
	}, {
		source: 'MachineLearning',
		target: 'Semi-SupervisedLearning',

	}, {
		source: 'MachineLearning',
		target: 'ReinforcementLearning',
	}, {
		source: 'MachineLearning',
		target: 'SelfLearning',
	}, {
		source: 'MachineLearning',
		target: 'AnomalyDetection',
	}, {
		source: 'MachineLearning',
		target: 'AssociationRuleLearning',

	}, {
		source: 'MachineLearning',
		target: 'Clustering',
	}, {
		source: 'MachineLearning',
		target: 'Classification',
	}, {
		source: 'MachineLearning',
		target: 'Regression',
	}, {
		source: 'MachineLearning',
		target: 'Embedding',

	}, {
		source: 'MachineLearning',
		target: 'ArtificialNeuralNetworks',
	}, {
		source: 'MachineLearning',
		target: 'DecisionTrees',
	}, {
		source: 'MachineLearning',
		target: 'SupportVectorMachines',
	}, {
		source: 'MachineLearning',
		target: 'RegressionAnalysis',

	}, {
		source: 'MachineLearning',
		target: 'BayesianNetworks',
	}, {
		source: 'MachineLearning',
		target: 'GeneticAlgorithms',
	}, {
		source: 'NetworkEmbedding',
		target: 'GraphNeuralNetworks',
	}, {
		source: 'NetworkEmbedding',
		target: 'SpectralEmbedding',

	}
	]
}

var optionFromDB = {
	series: [{
		color: ['#9ccc65', '#f2b368', '#61a0a8', '#d48265', '#91c7ae', '#749f83', '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3'],
		draggable: true,
		label: {
			show: true,
			position: 'bottom',
			formatter: '{b}'
		},
		force: {
			repulsion: 140
		},
		data: graph.data,
		links: graph.links,
		categories: categories,
		roam: true,
		//   type: 'graph',      
		//   layout: 'force',
		//  symbolSize: 34,
		//   animationDurationUpdate: 750

	}]
}