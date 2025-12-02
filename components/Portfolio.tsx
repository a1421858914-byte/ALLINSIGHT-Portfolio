import React, { useState } from 'react';
import { ProjectCategory, Project, ProjectFormat } from '../types';
import { PORTFOLIO_ITEMS } from '../constants';
import { ExternalLink, Upload, X, FileText, PlayCircle, Monitor, File, Image as ImageIcon } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>(ProjectCategory.ALL);
  const [projects, setProjects] = useState<Project[]>(PORTFOLIO_ITEMS);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  
  // Form State
  const [newProject, setNewProject] = useState<{
    title: string;
    category: ProjectCategory;
    description: string;
    format: ProjectFormat;
    file: File | null;
    cover: File | null;
  }>({
    title: '',
    category: ProjectCategory.BRANDING,
    description: '',
    format: 'PPT',
    file: null,
    cover: null
  });

  const filteredProjects = activeCategory === ProjectCategory.ALL
    ? projects
    : projects.filter(item => item.category === activeCategory);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'file' | 'cover') => {
    if (e.target.files && e.target.files[0]) {
      setNewProject({ ...newProject, [type]: e.target.files[0] });
    }
  };

  const handleAddProject = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create object URLs for previews (in a real app, you would upload to server)
    const coverUrl = newProject.cover 
      ? URL.createObjectURL(newProject.cover) 
      : `https://picsum.photos/800/600?random=${Date.now()}`; // Fallback random image

    const fileUrl = newProject.file
      ? URL.createObjectURL(newProject.file)
      : undefined;

    const projectToAdd: Project = {
      id: projects.length + 1,
      title: newProject.title,
      category: newProject.category,
      image: coverUrl,
      description: newProject.description,
      format: newProject.format,
      fileUrl: fileUrl
    };

    setProjects([projectToAdd, ...projects]);
    setIsUploadModalOpen(false);
    
    // Reset Form
    setNewProject({
      title: '',
      category: ProjectCategory.BRANDING,
      description: '',
      format: 'PPT',
      file: null,
      cover: null
    });
    
    // Switch to the category of the uploaded item
    setActiveCategory(projectToAdd.category);
  };

  const getFormatIcon = (format?: ProjectFormat) => {
    switch (format) {
      case 'VIDEO': return <PlayCircle size={24} />;
      case 'PPT': return <Monitor size={24} />;
      case 'PDF': return <FileText size={24} />;
      default: return <ImageIcon size={24} />;
    }
  };

  const getFormatLabel = (format?: ProjectFormat) => {
    switch (format) {
      case 'VIDEO': return '视频';
      case 'PPT': return 'PPT演示';
      case 'PDF': return 'PDF文档';
      default: return '图片';
    }
  };

  return (
    <section id="portfolio" className="py-24 bg-charcoal relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">精选作品</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-orange-500 mx-auto rounded-full"></div>
        </div>

        {/* Filter and Upload Actions */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
            <div className="flex flex-wrap justify-center gap-4">
            {Object.values(ProjectCategory).map((category) => (
                <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm md:text-base transition-all duration-300 border border-transparent ${
                    activeCategory === category
                    ? 'bg-gradient-to-r from-purple-600 to-orange-600 text-white shadow-lg shadow-purple-500/20'
                    : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/10'
                }`}
                >
                {category}
                </button>
            ))}
            </div>

            <button 
                onClick={() => setIsUploadModalOpen(true)}
                className="flex items-center gap-2 px-5 py-2 rounded-full border border-purple-500/30 text-purple-400 hover:bg-purple-500/10 hover:text-purple-300 transition-all text-sm font-medium"
            >
                <Upload size={16} />
                上传作品
            </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="group relative rounded-xl overflow-hidden cursor-pointer h-80 md:h-96 shadow-xl bg-midnight"
            >
              {/* Image */}
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Format Badge */}
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-2 border border-white/10">
                <span className="text-purple-400">
                  {getFormatIcon(project.format)}
                </span>
                <span className="text-xs font-medium text-white">{getFormatLabel(project.format)}</span>
              </div>
              
              {/* Overlay with color gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-midnight/90 via-midnight/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                {/* Decorative borders that animate in */}
                <div className="absolute inset-4 border border-white/20 scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500"></div>
                
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-orange-400 text-xs font-bold tracking-widest uppercase mb-2 block">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 text-sm line-clamp-2">{project.description}</p>
                </div>

                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 bg-white/10 p-2 rounded-full backdrop-blur-md hover:bg-purple-500 hover:text-white transition-colors">
                   {project.format === 'VIDEO' ? <PlayCircle size={20} /> : <ExternalLink size={20} />}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Upload Modal */}
      {isUploadModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-midnight/80 backdrop-blur-md overflow-y-auto">
          <div className="bg-charcoal border border-white/10 rounded-2xl p-8 w-full max-w-xl relative shadow-2xl animate-fade-in-up my-auto">
            <button 
                onClick={() => setIsUploadModalOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
                <X size={24} />
            </button>
            
            <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
              <Upload className="text-purple-500" /> 上传新作品
            </h3>
            
            <form onSubmit={handleAddProject} className="space-y-5">
                {/* 1. Basic Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                      <label className="block text-sm text-gray-400 mb-1">作品名称</label>
                      <input 
                          required
                          type="text" 
                          value={newProject.title}
                          onChange={(e) => setNewProject({...newProject, title: e.target.value})}
                          className="w-full bg-midnight border border-white/10 rounded-lg px-4 py-2 text-white focus:border-purple-500 outline-none"
                          placeholder="输入项目标题"
                      />
                  </div>
                  
                  <div>
                      <label className="block text-sm text-gray-400 mb-1">所属板块</label>
                      <select 
                          value={newProject.category}
                          onChange={(e) => setNewProject({...newProject, category: e.target.value as ProjectCategory})}
                          className="w-full bg-midnight border border-white/10 rounded-lg px-4 py-2 text-white focus:border-purple-500 outline-none"
                      >
                          {Object.values(ProjectCategory).filter(c => c !== ProjectCategory.ALL).map(c => (
                              <option key={c} value={c}>{c}</option>
                          ))}
                      </select>
                  </div>
                </div>

                {/* 2. Format Selection */}
                <div>
                  <label className="block text-sm text-gray-400 mb-2">文件格式类型</label>
                  <div className="grid grid-cols-3 gap-3">
                    {(['PPT', 'PDF', 'VIDEO'] as ProjectFormat[]).map((fmt) => (
                      <div 
                        key={fmt}
                        onClick={() => setNewProject({...newProject, format: fmt})}
                        className={`cursor-pointer rounded-lg border px-4 py-3 flex flex-col items-center justify-center gap-2 transition-all ${
                          newProject.format === fmt 
                          ? 'bg-purple-500/20 border-purple-500 text-white' 
                          : 'bg-midnight border-white/10 text-gray-400 hover:bg-white/5'
                        }`}
                      >
                         {getFormatIcon(fmt)}
                         <span className="text-xs font-bold">{getFormatLabel(fmt)}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 3. File Uploads */}
                <div className="space-y-4 border-t border-white/5 pt-4">
                   {/* Main File */}
                   <div>
                      <label className="block text-sm text-purple-300 mb-1 font-medium">
                        上传 {newProject.format} 文件 
                        <span className="text-gray-500 text-xs ml-2 font-normal">(无大小限制)</span>
                      </label>
                      <div className="relative">
                        <input 
                            type="file" 
                            required
                            accept={newProject.format === 'VIDEO' ? 'video/*' : newProject.format === 'PPT' ? '.ppt,.pptx' : '.pdf'}
                            onChange={(e) => handleFileChange(e, 'file')}
                            className="w-full bg-midnight border border-white/10 rounded-lg px-4 py-8 text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-white/10 file:text-white hover:file:bg-white/20 cursor-pointer text-center"
                        />
                        <div className="pointer-events-none absolute inset-0 flex items-center justify-center text-gray-500 opacity-50">
                          {newProject.file ? '' : <span className="flex flex-col items-center"><Upload size={20} className="mb-1"/>点击或拖拽文件到此处</span>}
                        </div>
                      </div>
                      {newProject.file && (
                        <p className="text-xs text-green-400 mt-1 flex items-center gap-1">
                          <File size={12} /> 已选择: {newProject.file.name}
                        </p>
                      )}
                   </div>

                   {/* Cover Image */}
                   <div>
                      <label className="block text-sm text-gray-400 mb-1">
                        封面图片 <span className="text-gray-500 text-xs">(用于展示卡片，若不填则使用默认图)</span>
                      </label>
                      <input 
                          type="file" 
                          accept="image/*"
                          onChange={(e) => handleFileChange(e, 'cover')}
                          className="w-full bg-midnight border border-white/10 rounded-lg px-4 py-2 text-sm text-gray-400 file:mr-4 file:py-1 file:px-3 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-white/10 file:text-white hover:file:bg-white/20 cursor-pointer"
                      />
                   </div>
                </div>

                {/* 4. Description */}
                <div>
                    <label className="block text-sm text-gray-400 mb-1">作品描述</label>
                    <textarea 
                        required
                        value={newProject.description}
                        onChange={(e) => setNewProject({...newProject, description: e.target.value})}
                        className="w-full bg-midnight border border-white/10 rounded-lg px-4 py-2 text-white focus:border-purple-500 outline-none resize-none"
                        rows={3}
                        placeholder="简单介绍一下这个作品..."
                    ></textarea>
                </div>

                <div className="pt-2">
                  <button 
                      type="submit"
                      className="w-full bg-gradient-to-r from-purple-600 to-orange-600 hover:from-purple-500 hover:to-orange-500 text-white font-bold py-3 rounded-lg shadow-lg shadow-purple-500/20 transition-all transform hover:scale-[1.02]"
                  >
                      确认上传并分配至 {newProject.category}
                  </button>
                </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;