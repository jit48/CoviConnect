import jwt from 'jsonwebtoken';

export default (req, res, next) => {
    const token = req.header('x-auth-token');
    if (!token)
        return res.status(401).json({
            method: 'AUTHENTICATION',
            status: res.statusCode,
            message: 'No authtentication token received, authorization denied.',
        });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(500).json({ method: 'AUTHENTICATION', status: res.statusCode, message: 'Token is not valid.' });
    }
};
