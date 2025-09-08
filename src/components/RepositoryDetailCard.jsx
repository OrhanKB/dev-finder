function RepositoryCardDetail() {
  return (
    <div className=" mt-5 bg-white justify-self-center border-4 shadow-xl font-mono p-6 w-320 h-auto flex flex-col">
      
      {/* Header with Close Button */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          <img
            src="https://avatars.githubusercontent.com/u/12345678?v=4"
            alt="owner-avatar"
            className="w-30 h-30 border-4"
          />
          <div>
            <h2 className="text-3xl font-bold text-gray-800">awesome-project</h2>
            <p className="text-2xl text-gray-500">@johnsmith</p>
          </div>
        </div>
        <button className="text-gray-400 hover:text-gray-600 text-xl">
          ✕
        </button>
      </div>

      {/* Main Content - Horizontal Layout */}
      <div className="flex gap-6">
        
        {/* Left Column */}
        <div className="flex-1">
          {/* Description */}
          <p className="text-base text-gray-600 mb-4 leading-relaxed">
            A modern web application built with React and Node.js for managing tasks efficiently
          </p>

          {/* Main Stats Grid */}
          <div className="grid grid-cols-4 gap-3 mb-4">
            <div className="bg-yellow-50 p-3 rounded text-center">
              <div className="text-xl font-bold text-yellow-700">
                ⭐ 2.3K
              </div>
              <div className="text-sm text-gray-500">Stars</div>
            </div>
            
            <div className="bg-blue-50 p-3 rounded text-center">
              <div className="text-xl font-bold text-blue-700">
                🍴 445
              </div>
              <div className="text-sm text-gray-500">Forks</div>
            </div>
            
            <div className="bg-green-50 p-3 rounded text-center">
              <div className="text-xl font-bold text-green-700">
                23
              </div>
              <div className="text-sm text-gray-500">Issues</div>
            </div>
            
            <div className="bg-purple-50 p-3 rounded text-center">
              <div className="text-xl font-bold text-purple-700">
                156
              </div>
              <div className="text-sm text-gray-500">Watchers</div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="bg-gray-50 p-3 rounded text-md font-bold text-gray-600 space-y-1">
            <div>📅 Created: 2 years ago</div>
            <div>🔄 Updated: 3 days ago</div>
            <div>📄 License: MIT License</div>
            <div>💾 Size: 45 MB</div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex-1">
          {/* Languages */}
          <div className="mb-4">
            <h3 className="text-lg font-bold text-gray-700 mb-2">Languages</h3>
            <div className="flex flex-wrap gap-1">
              <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                JavaScript (68%)
              </span>
              <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                CSS (22%)
              </span>
              <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                HTML (10%)
              </span>
            </div>
          </div>

          {/* Contributors */}
          <div className="mb-4">
            <h3 className="text-lg font-bold text-gray-700 mb-2">Top Contributors</h3>
            <div className="flex gap-2">
              <img
                src="https://avatars.githubusercontent.com/u/11111111?v=4"
                alt="contributor"
                className="w-10 h-10 rounded-full border"
                title="johnsmith"
              />
              <img
                src="https://avatars.githubusercontent.com/u/22222222?v=4"
                alt="contributor"
                className="w-10 h-10 rounded-full border"
                title="maryjane"
              />
              <img
                src="https://avatars.githubusercontent.com/u/33333333?v=4"
                alt="contributor"
                className="w-10 h-10 rounded-full border"
                title="alexdoe"
              />
              <img
                src="https://avatars.githubusercontent.com/u/44444444?v=4"
                alt="contributor"
                className="w-10 h-10 rounded-full border"
                title="sarahwilson"
              />
            </div>
          </div>

          {/* Topics */}
          <div className="mb-4">
            <h3 className="text-lg font-bold text-gray-700 mb-2">Topics</h3>
            <div className="flex flex-wrap gap-1">
              <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm">
                react
              </span>
              <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm">
                javascript
              </span>
              <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm">
                nodejs
              </span>
              <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm">
                web-app
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons - Full Width at Bottom */}
      <div className="flex gap-2 mt-4">
        <a
          href="#"
          className="flex-1 bg-black text-white text-center py-2 rounded text-sm hover:bg-gray-800 transition-colors"
        >
          View Repository
        </a>
        <a
          href="#"
          className="flex-1 bg-blue-500 text-white text-center py-2 rounded text-sm hover:bg-blue-600 transition-colors"
        >
          Live Demo
        </a>
      </div>
    </div>
  );
}

export default RepositoryCardDetail;