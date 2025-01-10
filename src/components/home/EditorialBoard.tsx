import { Link } from 'react-router-dom';
import { editors } from '../../data/editors';

export const EditorialBoard = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#0A2472]">
          Editorial Board
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {editors.slice(0, 8).map((editor) => (
            <Link
              key={editor.id}
              to={`/editor/${editor.id}`}
              className="group hover:scale-105 transition-transform duration-300"
            >
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <img
                  src={editor.image}
                  alt={editor.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="font-semibold text-lg mb-2 text-[#0A2472]">
                  {editor.name}
                </h3>
                <p className="text-gray-600 text-sm">{editor.role}</p>
                <p className="text-gray-500 text-sm mt-2">{editor.expertise}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            to="/editorial-board"
            className="inline-flex items-center text-[#0066FF] hover:underline"
          >
            View All Editorial Board Members
          </Link>
        </div>
      </div>
    </section>
  );
};