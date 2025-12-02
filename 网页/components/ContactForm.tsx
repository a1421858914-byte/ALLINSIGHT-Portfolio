import React, { useState } from 'react';
import { Send, CheckCircle, Loader2 } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    type: '品牌全案',
    budget: '10k-30k',
    description: ''
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      console.log('Form data sent to 460117431@qq.com:', formData);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-midnight relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="bg-charcoal rounded-3xl p-8 md:p-12 border border-white/5 shadow-2xl relative overflow-hidden">
          {/* Background Glow */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">开启合作</h2>
            <p className="text-gray-400">填写下方需求表，我会在24小时内与您联系</p>
          </div>

          {status === 'success' ? (
            <div className="flex flex-col items-center justify-center py-12 animate-fade-in-up">
              <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                <CheckCircle size={40} className="text-green-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">需求已发送</h3>
              <p className="text-gray-400 text-center max-w-md">
                感谢您的信任。您的项目信息已发送至我的邮箱 (460117431@qq.com)。我会尽快评估并在24小时内回复您。
              </p>
              <button 
                onClick={() => setStatus('idle')}
                className="mt-8 text-purple-400 hover:text-white transition-colors underline"
              >
                发送新的需求
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm text-gray-400 font-medium">您的姓名 / 称呼</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-midnight border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                    placeholder="例如：张先生"
                  />
                </div>

                {/* Contact */}
                <div className="space-y-2">
                  <label htmlFor="contact" className="text-sm text-gray-400 font-medium">联系方式 (电话/微信)</label>
                  <input
                    type="text"
                    id="contact"
                    name="contact"
                    required
                    value={formData.contact}
                    onChange={handleChange}
                    className="w-full bg-midnight border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                    placeholder="您的联系方式"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Type */}
                <div className="space-y-2">
                  <label htmlFor="type" className="text-sm text-gray-400 font-medium">项目类型</label>
                  <div className="relative">
                    <select
                      id="type"
                      name="type"
                      value={formData.type}
                      onChange={handleChange}
                      className="w-full bg-midnight border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all appearance-none cursor-pointer"
                    >
                      <option>品牌全案 (Branding)</option>
                      <option>视频制作 (Video Production)</option>
                      <option>交互展陈 (Interactive)</option>
                      <option>智能培训 (Intelligent Training)</option>
                      <option>其他 (Other)</option>
                    </select>
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-500">
                      ▼
                    </div>
                  </div>
                </div>

                {/* Budget */}
                <div className="space-y-2">
                  <label htmlFor="budget" className="text-sm text-gray-400 font-medium">预算范围</label>
                  <div className="relative">
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full bg-midnight border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all appearance-none cursor-pointer"
                    >
                      <option>¥5k - ¥10k</option>
                      <option>¥10k - ¥30k</option>
                      <option>¥30k - ¥100k</option>
                      <option>¥100k - ¥300k</option>
                      <option>¥300k +</option>
                    </select>
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-500">
                      ▼
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <label htmlFor="description" className="text-sm text-gray-400 font-medium">项目描述</label>
                <textarea
                  id="description"
                  name="description"
                  rows={4}
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full bg-midnight border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all resize-none"
                  placeholder="简单描述您的需求、预期风格或参考..."
                ></textarea>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-gradient-to-r from-purple-600 to-orange-600 hover:from-purple-500 hover:to-orange-500 text-white font-bold py-4 rounded-lg transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="animate-spin" size={20} /> 发送中...
                  </>
                ) : (
                  <>
                    <Send size={20} /> 提交需求
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;