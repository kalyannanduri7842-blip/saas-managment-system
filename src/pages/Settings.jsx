import { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { Save } from 'lucide-react';

export default function Settings() {
  const { settings, persistSettings, showToast, toggleTheme } = useApp();
  const [form, setForm] = useState(null);

  useEffect(() => {
    if (settings) setForm({ ...settings });
  }, [settings]);

  if (!form) return null;

  const handleSave = () => {
    persistSettings(form);
    showToast('Settings saved successfully');
  };

  const update = (section, key, value) => {
    setForm((prev) => ({
      ...prev,
      [section]: { ...prev[section], [key]: value },
    }));
  };

  return (
    <div className="max-w-2xl space-y-6">
      {/* Company Settings */}
      <div className="card space-y-4">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Company Settings</h3>
        <div>
          <label className="label">Company Name</label>
          <input
            className="input"
            value={form.company.name}
            onChange={(e) => update('company', 'name', e.target.value)}
          />
        </div>
        <div>
          <label className="label">Company Email</label>
          <input
            type="email"
            className="input"
            value={form.company.email}
            onChange={(e) => update('company', 'email', e.target.value)}
          />
        </div>
        <div>
          <label className="label">Company Website</label>
          <input
            className="input"
            value={form.company.website}
            onChange={(e) => update('company', 'website', e.target.value)}
          />
        </div>
      </div>

      {/* Profile Settings */}
      <div className="card space-y-4">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Profile Settings</h3>
        <div>
          <label className="label">Name</label>
          <input
            className="input"
            value={form.profile.name}
            onChange={(e) => update('profile', 'name', e.target.value)}
          />
        </div>
        <div>
          <label className="label">Email</label>
          <input
            type="email"
            className="input"
            value={form.profile.email}
            onChange={(e) => update('profile', 'email', e.target.value)}
          />
        </div>
        <div>
          <label className="label">Role</label>
          <input
            className="input"
            value={form.profile.role}
            onChange={(e) => update('profile', 'role', e.target.value)}
          />
        </div>
      </div>

      {/* Appearance */}
      <div className="card space-y-4">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Appearance</h3>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-900 dark:text-white">Theme</p>
            <p className="text-xs text-gray-500">Switch between light and dark mode</p>
          </div>
          <div className="flex rounded-lg border border-gray-200 dark:border-gray-600 overflow-hidden">
            <button
              onClick={() => {
                update('appearance', 'theme', 'light');
                if (form.appearance.theme !== 'light') {
                  document.documentElement.classList.remove('dark');
                }
              }}
              className={`px-4 py-1.5 text-sm font-medium ${
                form.appearance.theme === 'light'
                  ? 'bg-primary-600 text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300'
              }`}
            >
              Light
            </button>
            <button
              onClick={() => {
                update('appearance', 'theme', 'dark');
                document.documentElement.classList.add('dark');
              }}
              className={`px-4 py-1.5 text-sm font-medium ${
                form.appearance.theme === 'dark'
                  ? 'bg-primary-600 text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300'
              }`}
            >
              Dark
            </button>
          </div>
        </div>
      </div>

      {/* Notification Settings */}
      <div className="card space-y-4">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Notification Settings</h3>
        {[
          { key: 'renewalReminders', label: 'Renewal reminders', desc: 'Get notified about upcoming subscription renewals' },
          { key: 'paymentNotifications', label: 'Payment notifications', desc: 'Alerts for successful and failed payments' },
          { key: 'applicationNotifications', label: 'Application notifications', desc: 'Updates when applications are added or changed' },
        ].map(({ key, label, desc }) => (
          <div key={key} className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-900 dark:text-white">{label}</p>
              <p className="text-xs text-gray-500">{desc}</p>
            </div>
            <button
              onClick={() => update('notifications', key, !form.notifications[key])}
              className={`relative h-6 w-11 rounded-full transition-colors ${
                form.notifications[key] ? 'bg-primary-600' : 'bg-gray-300 dark:bg-gray-600'
              }`}
            >
              <span
                className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform ${
                  form.notifications[key] ? 'translate-x-5' : ''
                }`}
              />
            </button>
          </div>
        ))}
      </div>

      <button onClick={handleSave} className="btn-primary">
        <Save className="h-4 w-4" /> Save Settings
      </button>
    </div>
  );
}
